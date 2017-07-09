# NativeScript examples

##  Install

- Install http://docs.nativescript.org/tutorial/chapter-1
- MacOS https://docs.nativescript.org/start/ns-setup-os-x
- Intel® Hardware Accelerated Execution Manager (Intel® HAXM) https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager


```bash
npm install -g nativescript
tns doctor
tns update

sudo gem install cocoapods
brew update
```
## Android Configuration

Install or Upgrade android studio.

Set enviroment variables:
```bash
export ANDROID_HOME=/Users/user/Library/Android/sdk
export ANDROID_SDK_ROOT=/Users/user/Library/Android/sdk
```

Install android skd build tools:
```bash
$ANDROID_HOME/tools/bin/sdkmanager "tools" "platform-tools" "platforms;android-25" "build-tools;25.0.2" "extras;android;m2repository" "extras;google;m2repository"
```

Install virtual devices:  https://docs.nativescript.org/tooling/android-virtual-devices

List available emulators:
```bash
emulator -list-avds
NexusSAPI24
```

Execute Android Emulator:
```bash
$ANDROID_HOME/emulator/emulator -avd NexusSAPI24 -netdelay none -netspeed full
```

## Nativescript Basics

- Tutorial http://docs.nativescript.org/tutorial/chapter-1
- Cannot find a compatible Android SDK for compilation when running `tns platform add android`
https://stackoverflow.com/questions/32723748/cannot-find-a-compatible-android-sdk-for-compilation-when-running-tns-platform

```bash
tns create HelloWorld --template nativescript-template-tutorial
cd HelloWorld

# add platforms
tns platform remove android
tns platform add android
tns platform remove ios
tns platform add ios

# build app
tns build android
```

Get information about the app:
> tns info

List running emulators reachable by nativescript:
> tns device

Run android app on device :  
> tns run android

Run android app on an specific device:  
> tns run android --device 1

Run ios app on device :  
> tns run ios



## MBaaS

- Telerik backend services http://www.telerik.com/platform/backend-services
- Kinvey Releases NativeScript SDK to Enable the Best Full-Stack Native Mobile Development Experience https://www.kinvey.com/kinvey-nativescript-sdk/
