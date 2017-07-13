http://docs.nativescript.org/angular/tutorial/ng-chapter-1

## Integración de Firebase con ios

Configuración SDK para android https://firebase.google.com/docs/ios/setup  ( Adicionar aplicación ios en la consola de firebase )

Download GoogleService-info.plist

  iOS: GoogleService-Info.plist which you'll add to your NativeScript project at app/App_Resources/iOS/GoogleService-Info.plist

  Android: google-services.json which you'll add to your NativeScript project at app/App_Resources/Android/google-services.json


Upgrade git:

  brew install git

Or use the github app for mac

tns plugin add nativescript-plugin-firebase
pod repo update


running app on ios device
http://docs.telerik.com/platform/appbuilder/nativescript/running-your-app/run-app-device
https://facebook.github.io/react-native/docs/running-on-device.html

tns run ios

  Please close any current Xcode sessions and use `HelloWorldAngular.xcworkspace` for this project from now on.
