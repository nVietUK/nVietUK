@echo off
@call rmdir build\magma-cuda /s
@call mkdir build\magma-cuda
@call cd build\magma-cuda
@call "C:\Program Files (x86)\Intel\oneAPI\setvars.bat" intel64 vs2022
cmake ^
    -G Ninja ^
    -D CMAKE_CONFIGURATION_TYPES:STRING=Release ^
    -D CMAKE_TRY_COMPILE_CONFIGURATION:STRING=Release ^
    -S ..\..\magma-cuda^
    -DCMAKE_INSTALL_PREFIX=C:\\magma-cuda ^
    -DCMAKE_CXX_STANDARD=17 ^
    -DCMAKE_EXPORT_COMPILE_COMMANDS=ON ^
    -DMAGMA_ENABLE_CUDA=True ^
    -DCMAKE_CUDA_ARCHITECTURES=75 ^
    -DGPU_TARGET=Turing 
ninja install
@call cd ..\..