#!/usr/bin/env bash
#cd ~/LRZSync/master_TUM
git add .
sleep 1
git status
DATE=`date +%d\ %b\ %Y`
COMP=`hostname`
git commit -m "$DATE, $COMP"

#eval `ssh-agent -s`
#PASS=""
#install -vm700 <(echo "echo $PASS") "$PWD/ps.sh"
#cat /home/ismael/.ssh/id_rsa | SSH_ASKPASS="$PWD/ps.sh" ssh-add - && rm -v "$PWD/ps.sh"

#HOME=/home/ismael
git push # --all origin
