import Foundation
import LocalAuthentication

@objc(Fingerprint) class Fingerprint : CDVPlugin {

  @objc func isAvailable(_ command: CDVInvokedUrlCommand){
    let authenticationContext = LAContext();
    var error:NSError?;

    let available = authenticationContext.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error);

    var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "Not available");
    if available == true {
      pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: "Available");
    }

    commandDelegate.send(pluginResult, callbackId:command.callbackId);
  }

  @objc func authenticate(_ command: CDVInvokedUrlCommand){
    let authenticationContext = LAContext();
    var pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "Something went wrong");
    var reason = "Authentication";
    let data  = command.arguments[0] as AnyObject?;

    var policy:LAPolicy = .deviceOwnerAuthenticationWithBiometrics;
//    if #available(iOS 9.0, *) {
//        policy = .deviceOwnerAuthentication;
//    }
    if let disableBackup = data?["disableBackup"] as! Bool? {
        if disableBackup {
            authenticationContext.localizedFallbackTitle = "";
        } else {
          if let localizedFallbackTitle = data?["localizedFallbackTitle"] as! String? {
            authenticationContext.localizedFallbackTitle = localizedFallbackTitle;
          }
      }
    }
    authenticationContext.localizedFallbackTitle = "";


    //Localized reason
    if let localizedReason = data?["localizedReason"] as! String? {
      reason = localizedReason;
    }else if let clientId = data?["clientId"] as! String? {
      reason = clientId;
    }
    var errorPointer : NSError?
    if authenticationContext.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &errorPointer) {
    authenticationContext.evaluatePolicy(
      policy,
      localizedReason: reason,
      reply: { [unowned self] (success, error) -> Void in
        if( success ) {
          pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: "Success");
        }else {
          // Check if there is an error
          if error != nil {
//            var messageError = ""
//            switch error!.code {
//            case LAError.authenticationFailed:
//                messageError = "Authentication was not successful because the user failed to provide valid credentials."
//                break
//            case LAError.userCancel:
//                messageError = "Authentication was canceled by the user"
//                break
//            case LAError.userFallback:
//                messageError = "Authentication was canceled because the user tapped the fallback button"
//                break
//            case LAError.touchIDNotEnrolled:
//                messageError = "Authentication could not start because Touch ID has no enrolled fingers."
//            case LAError.passcodeNotSet:
//                messageError = "Passcode is not set on the device."
//                break
//            case LAError.systemCancel:
//                messageError = "Authentication was canceled by system"
//                break
//            default:
//                messageError = error.localizedDescription
//            }
            
            let code = (error! as NSError).code
            
            pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: "\(code)")
          }
        }
        self.commandDelegate.send(pluginResult, callbackId:command.callbackId);
      });
    
    } else {
    // Device cannot use TouchID
    var message = ""
    switch errorPointer!.code{
    
    case LAError.Code.touchIDNotEnrolled.rawValue:
        message = "TouchID is not enrolled"
    case LAError.Code.passcodeNotSet.rawValue:
    message = "A passcode has not been set"

    default:
    message = "TouchID not available"
        }
    pluginResult = CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: message);
    self.commandDelegate.send(pluginResult, callbackId:command.callbackId);
    
    }
}
}