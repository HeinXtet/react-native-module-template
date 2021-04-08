import RNAuthenticatorModuleModule, {
  AuthenticationType,
  DefaultValidationPattern,
} from 'authenticator'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import FormController from './FormController'
import Input from './Input'

const App = () => {
  return (
    <View style={styles.container}>
      <FormController
        validations={[
          { key: 'email', pattern: DefaultValidationPattern.email },
          {
            key: 'password',
            pattern: DefaultValidationPattern.password,
          },
        ]}
        onSubmit={() => console.log('after validation correct')}
        inputCount={2}
        containerStyle={{ flex: 1 }}
        render={(props) => (
          <View style={{ flex: 1 }}>
            <Text
              style={{ paddingVertical: 29, fontSize: 28, fontWeight: 'bold' }}
            >
              Welcome to Application
            </Text>
            <Input
              placeholder={'Email'}
              onChangeText={(text: string) => props.onChange('email', text)}
            />
            <View style={{ marginVertical: 2 }} />
            <Input
              placeholder={'Password'}
              onChangeText={(text: string) => props.onChange('password', text)}
            />
            <View style={{ height: 8 }} />
            <TouchableOpacity
              style={[
                styles.button,
                props.isValid
                  ? {
                      opacity: 1,
                    }
                  : { opacity: 0.5 },
              ]}
              disabled={!props.isValid}
              onPress={props.onSubmit}
            >
              <Text style={{ fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
        onError={(error: string) => {
          console.log(error)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    height: 55,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
