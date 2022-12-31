docker run -d -v :/data \
    -e TYPE=PAPER \
    -p 25565:25565 -e EULA=TRUE --name mc itzg/minecraft-server