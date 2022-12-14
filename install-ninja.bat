@echo off
@call rmdir build\ninja /s
@call mkdir build\ninja
@call cd build\ninja
cmake ^
    -G "Visual Studio 17 2022" ^
    -DCMAKE_CONFIGURATION_TYPES="Release"^
    -S ..\..\ninja^
    -DCMAKE_INSTALL_PREFIX=C:\\ninja ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON 
@call cd ..\..