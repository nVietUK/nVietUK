@echo off
@call rmdir build\magma /s
@call mkdir build\magma

@call cd magma 
@call wsl -e echo -e 'BACKEND = cuda\nFORT = true' > make.inc
@call wsl -e make generate GPU_TARGET=Turing
@call cd ..

@call cd build\magma
@call "C:\Program Files (x86)\Intel\oneAPI\setvars.bat" intel64 vs2022
cmake ^
    -G "Visual Studio 17 2022" ^
    -D CMAKE_CONFIGURATION_TYPES:STRING=Release ^
    -S ..\..\magma^
    -DCMAKE_INSTALL_PREFIX=C:\\magma ^
    -DMAGMA_ENABLE_CUDA=True ^
    -DCMAKE_CUDA_ARCHITECTURES=75 ^
    -DGPU_TARGET=Turing ^
    -D MKLROOT:STRING="C:\Program Files (x86)\Intel\oneAPI\mkl"
cmake -S ..\..\magma
@call cd ..\..