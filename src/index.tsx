import { NativeModules } from 'react-native'

import {
  DefaultValidationPattern as DefaultPatterns,
  LoginType as Type,
} from './service'
import { Login } from './ui/'

const RNAuthenticatorModuleModule = NativeModules.RNAuthenticatorModuleModule

export const LoginView = Login
export const AuthenticationType = Type
export const DefaultValidationPattern = DefaultPatterns

export default RNAuthenticatorModuleModule
