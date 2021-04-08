import React, { useState } from 'react'
import { View, ViewStyle } from 'react-native'

interface PropsType {
  onError: (error: string) => void
  onSubmit: () => void
  render: (props: Props) => any
  validations: ValidationPattern[]
  inputCount: number
  containerStyle?: ViewStyle | ViewStyle[]
}

interface Props {
  isValid: boolean
  onChange: (key: string, text: string) => void
  onSubmit: () => void
}

interface ValidationPattern {
  key: string
  pattern: RegExp
}

interface Field {
  key: string
  text: string
}

const FormController = (props: PropsType) => {
  const { render } = props
  const [isAllValid, setValid] = useState(false)
  const [fields, setFields] = useState<Field[]>([])

  const onSubmit = () => {
    if (isAllValid) {
      props.onSubmit()
    }
  }

  const onChange = (key: string, text: string) => {
    const newField = { key, text }
    const index = fields.findIndex((field) => field.key === key)
    if (index !== -1) {
      fields[index] = newField
    } else {
      fields.push(newField)
    }
    checkValid(fields)
    setFields(fields)
  }

  const checkValid = (passFields: Field[]) => {
    const { validations, inputCount } = props
    const isAllValid = passFields.map((field) => {
      const validation = validations.find((v) => v.key === field.key)
      if (validation !== undefined) {
        return validation.pattern.test(field.text)
      } else {
        return false
      }
    })
    setValid(!isAllValid.includes(false) && inputCount === fields.length)
  }
  return (
    <View style={props.containerStyle}>
      {render({ isValid: isAllValid, onChange, onSubmit })}
    </View>
  )
}

export default FormController
