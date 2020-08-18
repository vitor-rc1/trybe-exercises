#!/bin/bash
if [ -d $1 ]
then
    echo "É um diretorio"
elif [ -f $1 ]
then
    echo "É um arquivo"
else
    echo "Desconhecido"
fi
ls -l $1