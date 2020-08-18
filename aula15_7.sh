#!/bin/bash

if [ -d $1 ]
then
    echo "É um diretorio"
        CONT=`ls -l $1 | wc -l`
        CONT=`expr $CONT - 1`
    echo "O $1 tem $CONT arquivos"
else
    echo "Não é um diretorio"
fi
