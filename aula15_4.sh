#!/bin/bash

PATH="./caminho/"
FILEPATH="./caminho/arquivo.txt"

if [ -d $PATH ]
then
    echo "Caminho está habilitado"
    if [ -w $FILEPATH ]
    then
        echo "Você tem permissão para editar"
    else
        echo "Você não tem permissão para editar"
    fi
fi