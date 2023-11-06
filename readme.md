adb forward tcp:27042 tcp:27042
adb forward tcp:27043 tcp:27043
frida -U -f com.zhuomogroup.ylyk -l .\hook-md5.js --no-pause