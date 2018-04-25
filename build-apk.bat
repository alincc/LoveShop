echo off
set workingFolder=%cd%

d:
cd %workingFolder%

echo delete old apk
del /f /s %workingFolder%\platforms\android\build\outputs\apk\android-armv7-debug.apk

echo un-install old current apk on device
adb uninstall com.ionicframework.l2s764678

rem echo ionic cordova build android
rem ionic cordova build android

echo ionic cordova run android
ionic cordova run android

echo install new apk to device
adb install %workingFolder%\platforms\android\build\outputs\apk\android-armv7-debug.apk


rem pause
exit