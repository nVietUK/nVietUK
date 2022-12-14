@echo off
@call rmdir build\oneMKL /s
@call mkdir build\oneMKL
@call cd build\oneMKL
cmake ^
    -G "Visual Studio 17 2022" ^
    -DCMAKE_CONFIGURATION_TYPES="Release"^    
    -S ..\..\oneMKL^
    -DCMAKE_INSTALL_PREFIX=C:\\oneMKL ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ^
    -DTBB_LIBRARIES TBB_LINK=
@call cd ..\..