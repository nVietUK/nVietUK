sudo apt install git build-essential zlibc
git submodule deinit -f cpython
git submodule update --init cpython
cd cpython 
git checkout 3.10
git pull 

./configure
make -j 100
sudo make install