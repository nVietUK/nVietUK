@echo off
@call rmdir build\opencv /s
@call mkdir build\opencv
@call cd build\opencv
cmake ^
    -G "Visual Studio 17 2022" ^
    -D CMAKE_CONFIGURATION_TYPES:STRING=Release ^
    -S ..\..\opencv ^
    -DCMAKE_BUILD_TYPE=Release ^
    -DCMAKE_INSTALL_PREFIX=C:\\opencv ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ^
    -DCUDA_ARCH_BIN=7.5^
    -DCUDA_FAST_MATH=ON^
    -DOPENCV_EXTRA_MODULES_PATH=a:\nvietuk\opencv_contrib\modules^
    -DENABLE_FAST_MATH=ON^
    -DOPENCV_DNN_CUDA=ON^
    -DWITH_CUDA=ON^
    -DENABLE_CCACHE=ON
cmake -S ..\..\opencv
@call cd ..\..