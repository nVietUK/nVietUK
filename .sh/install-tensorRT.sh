read -p "Reinstall? (Y/n)" yn

case $yn in 
	[nN] ) ;;
	* ) 
		git submodule deinit -f TensorRT;
		git submodule update --init TensorRT;

		cd TensorRT;
		git checkout main;
		git pull ;
		git submodule update --init;
		cd parsers/onnx;
		git submodule update --init;
		cd ../..;
		cd ..;
esac

export TRT_LIBPATH=`pwd`/TensorRT
cd build
rm tensorRT -fr
mkdir -p tensorRT && cd tensorRT
cmake ../../TensorRT \
	-DCUDA_VERSION=11.8 -DGPU_ARCHS="75" -DCMAKE_CUDA_ARCHITECTURES="75" \
	-DCMAKE_CUDA_COMPILER="/usr/local/cuda/bin/nvcc" -DCMAKE_CUDA_FLAGS="-allow-unsupported-compiler" \
	-DTRT_LIB_DIR=$TRT_LIBPATH/lib/ -DTRT_INC_DIR=$TRT_LIBPATH/include -DTRT_OUT_DIR=`pwd`/out
make -j 100 && sudo make install
