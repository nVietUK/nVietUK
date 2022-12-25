# git submodule deinit -f TensorRT
# git submodule update --init TensorRT

mkdir bin
wget -O bin/gcc.tar.gz https://mirrorservice.org/sites/sourceware.org/pub/gcc/releases/gcc-10.4.0/gcc-10.4.0.tar.gz
rm gcc -fr
tar -xf bin/gcc.tar.gz 

cd gcc-10.4.0
./contrib/download_prerequisites
rm ../build/gcc -fr
mkdir ../build/gcc
cd ../build/gcc
../../gcc-10.4.0/configure
make
cd objdir && make install && cd ..
cd ..

cd TensorRT
git checkout origin/release/8.5
git pull 
cd ..

cd build
rm tensorRT -fr
mkdir -p tensorRT && cd tensorRT
cmake ../../TensorRT -DTRT_LIB_DIR=../../TensorRT\lib -DTRT_BIN_DIR=`pwd`/out \
	-DCUDA_VERSION=11.8 -DGPU_ARCHS="75" -DCMAKE_CUDA_ARCHITECTURES="75" \
	-DCMAKE_CUDA_COMPILER="/usr/local/cuda/bin/nvcc"
make && sudo make install
