echo off
set workingFolder=%cd%

d:
cd %workingFolder%

echo un-install old current apk on device
adb uninstall com.ionicframework.l2s764678

echo install new apk to device
adb install %workingFolder%\platforms\android\build\outputs\apk\android-armv7-debug.apk


rem pause
exit