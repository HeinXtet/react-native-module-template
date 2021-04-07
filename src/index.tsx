import { NativeModules } from 'react-native'

import { Login } from './ui/'

const RNAuthenticatorModuleModule = NativeModules.RNAuthenticatorModuleModule

export const LoginView = Login

export default RNAuthenticatorModuleModule
