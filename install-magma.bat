@echo off
@call rmdir build\magma /s
@call mkdir build\magma

@call git submodule deinit -f magma
@call git submodule update --init magma

@call cd magma 
@call wsl -e echo -e BACKEND = cuda\nFORT = False > make.inc
@call wsl -e make generate GPU_TARGET=Turing
@call cd ..

@call cd build\magma
@call "C:\Program Files (x86)\Intel\oneAPI\setvars.bat" intel64 vs2022
cmake ^
    -G "Visual Studio 17 2022" ^
    -D CMAKE_CONFIGURATION_TYPES:STRING="Release" ^
    -S ..\..\magma^
    -D CMAKE_INSTALL_PREFIX:STRING="C:\\magma" ^
    -D MAGMA_ENABLE_CUDA:BOOL=OFF ^
    -D CMAKE_CUDA_ARCHITECTURES:STRING="75" ^
    -D GPU_TARGET:STRING="Turing" ^
    -D OpenMP_C_FLAGS:STRING="-openmp:llvm" ^
    -D OpenMP_CXX_FLAGS:STRING="-openmp:llvm" ^
    -D USE_FORTRAN:BOOL=OFF
cmake -S ..\..\magma
@call cd ..\..