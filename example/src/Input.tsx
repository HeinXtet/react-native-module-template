import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

interface PropsType extends TextInputProps {}

const Input = (props: PropsType) => {
  return (
    <View>
      <TextInput {...props} style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    margin: 8,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
})

export default Input
