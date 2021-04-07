//
//  RNAuthenticatorModuleModule.swift
//  RNAuthenticatorModuleModule
//
//  Copyright © 2021 Hein Htet. All rights reserved.
//

import Foundation

@objc(RNAuthenticatorModuleModule)
class RNAuthenticatorModuleModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
