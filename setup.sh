#!/bin/bash
if [[ $(conda -V) != *conda* ]]; then
        cd /tmp
        curl -O https://repo.anaconda.com/archive/Anaconda3-5.2.0-Linux-x86_64.sh
        bash Anaconda3-5.2.0-Linux-x86_64.sh
        source ~/.bashrc
        echo  "# added by Anaconda3 installer" >> ~/.bashrc
        echo export PATH="/home/`echo $(hostname) | cut -d'-' -f1`/anaconda3/bin:$PATH" >> ~/.bashrc


else
        echo "Conda already installed"
fi
echo "You want to Setup Anaconda Environment(y|n)"
read choice
if [[ "$choice" = "y" ]];
then
        echo "Setting the Environment"
        echo "Enter Environment Name"
        read env_namei
        conda create -n "$env_name" tensorflow-gpu cudatoolkit=9.0 python=3.6
        conda activate "$env_name"
else
        exit
fi