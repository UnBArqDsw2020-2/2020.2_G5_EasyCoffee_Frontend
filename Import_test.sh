#!/bin/bash
echo "*********Case statement************"
echo "1 - Criar web App "
echo "2 - excluir dockers "
read num

case $num in
"1")
docker-compose up -d 

;;
"2")
docker stop easy_web

docker rm easy_web
;;
*)
echo "Não compativel"
;;
esac
