#!/bin/bash

currentUser=$(whoami)
echo ${currentUser}

if [ "${currentUser}" == "root" ]; then
    currentUser="nghost"
    adduser ${currentUser}
    usermod -aG sudo ${currentUser}
    su - ${currentUser}
fi

if [ ! -d "ghost" ]; then
    mkdir ghost
fi

cd ghost && ghost "$@"