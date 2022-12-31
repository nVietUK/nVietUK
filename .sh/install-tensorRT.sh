#!/bin/bash

TRT_VERSION=8.5.2
CUDA_VERSION=11.8
v="${TRT_VERSION}-1+cuda${CUDA_VERSION}"
echo $v

if [[ $1 != "-f" ]]; then read -p "(Re)install repo? (Y/n) " yn; else yn='y'; fi
case $yn in 
	[nN] ) ;;
	* ) 
		git submodule deinit -f TensorRT;
		git submodule update --init TensorRT;

		cd TensorRT;
		git checkout ${TRT_VERSION};
		git submodule update --init;
		cd parsers/onnx;
		git submodule update --init;
		cd ../..;
		cd ..;
esac

if [[ $1 != "-f" ]]; then read -p "(Re)install python? (Y/n) " yn; else yn='y'; fi
case $yn in 
	[nN] ) ;;
	* )
		.sh/install-python.sh
esac

if [[ $1 != "-f" ]]; then read -p "(Re)install cuda? (Y/n) " yn; else yn='y'; fi
case $yn in 
	[nN] ) ;;
	* )
		mkdir bin 
		cd bin 
		wget -O cuda.pin https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
		sudo mv -f cuda.pin /etc/apt/preferences.d/cuda-repository-pin-600
		sudo add-apt-repository \"deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/ /\"
		sudo apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/3bf863cc.pub
		wget -O cuda.deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-keyring_1.0-1_all.deb
		sudo dpkg -i cuda.deb
		sudo apt update
		sudo apt-get install libcudnn8=8.7.0.*-1+cuda11.8 libcudnn8-dev=8.7.0.*-1+cuda11.8 \
			libnvinfer8=${v} libnvonnxparsers8=${v} libnvparsers8=${v} libnvinfer-plugin8=${v} \
        	libnvinfer-dev=${v} libnvonnxparsers-dev=${v} libnvparsers-dev=${v} libnvinfer-plugin-dev=${v} \
        	python3-libnvinfer=${v};
		sudo apt-get -y install cuda=11.8.0-1
		cd ..
esac

export TRT_LIBPATH=`pwd`/TensorRT
mkdir build
sudo apt install cmake
cd build
rm tensorRT -fr
mkdir -p tensorRT && cd tensorRT
cmake ../../TensorRT \
	-DCUDA_VERSION=11.8 -DGPU_ARCHS="75" -DCMAKE_CUDA_ARCHITECTURES="75" \
	-DCMAKE_CUDA_COMPILER="/usr/local/cuda/bin/nvcc" -DCMAKE_CUDA_FLAGS="-allow-unsupported-compiler" \
	-DTRT_LIB_DIR=$TRT_LIBPATH/lib/ -DTRT_INC_DIR=$TRT_LIBPATH/include -DTRT_OUT_DIR=`pwd`/out
make -j 50 && sudo make install
