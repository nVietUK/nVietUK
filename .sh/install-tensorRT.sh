git submodule deinit -f gcc 
git submodule update --init gcc 
git submodule deinit -f TensorRT
git submodule update --init TensorRT

cd gcc 
git checkout releases/gcc-10.4.0
git pull

./configure --host=x86_64-pc-linux-gnu
make BOOT_CFLAGS='-O' bootstrap
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
