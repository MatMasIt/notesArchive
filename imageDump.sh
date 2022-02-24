#!/bin/sh
sudo apt install wget -y
rm imageArchive/*
images=$(grep -R -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*" latest | grep "i.imgur.com" | sort -u)
mkdir -p imageArchive
touch imageArchive/list.txt
echo "$images" >  imageArchive/list.txt
iList=$(echo "$images" | cut -d: -f2-)
echo "$iList" | for url in $(cat) ; do
        filename=$(echo "$url" | awk -F"/" '{print($NF)}')
        wget -nc $url -O "imageArchive/"$filename
done
