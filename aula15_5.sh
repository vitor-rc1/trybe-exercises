#!/bin/bash
echo "Digite o caminho de um arquivo ou diretório:" 
read FILE 
if [ -d $FILE ]
then
    echo "É um diretorio"
elif [ -f $FILE ]
then
    echo "É um arquivo"
else
    echo "Desconhecido"
fi
ls -l $FILE