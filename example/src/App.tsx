import RNAuthenticatorModuleModule, { LoginView } from 'authenticator'
import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    console.log(RNAuthenticatorModuleModule)
  })
  return <LoginView />
}

export default App
