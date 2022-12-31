if [[ $1 != "-f" ]]; then read -p "(Re)install repo? (Y/n) " yn; else yn='y'; fi
case $yn in 
    [nN] ) ;;
    * ) 
        git submodule deinit -f tensorflow;
		git submodule update --init tensorflow;

        cd tensorflow
        git checkout origin/r2.11
        cd ..
esac

if [[ $1 != "-f" ]]; then read -p "(Re)install tensorRT? (Y/n) " yn; else yn='y'; fi
case $yn in 
    [nN] ) ;;
    * )
        .sh/install-tensorRT.sh $1
esac

apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_19.x | bash - && \
apt-get install -y nodejs
npm install -g @bazel/bazelisk
pip install numpy

cd tensorflow
./configure
bazel build --config=cuda //tensorflow/tools/pip_package:build_pip_package
cd ..