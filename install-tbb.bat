@echo off
@call rmdir build\oneTBB /s
@call mkdir build\oneTBB
@call cd build\oneTBB
cmake ^
    -G "Visual Studio 17 2022" ^
    -DCMAKE_CONFIGURATION_TYPES="Release"^
    -S ..\..\oneTBB^
    -DCMAKE_INSTALL_PREFIX=C:\\oneTBB ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON 
@call cd ..\..