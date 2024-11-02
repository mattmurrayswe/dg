Fonts: Fasten, Righteous

docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs

./vendor/bin/sail up

docker-compose exec laravel.test bash

npm run dev

Deploy:
git pull no ec2
npm run build dentro do container

(conflito de http em https no Vite)
mv /public/hot /public/backup-hot

Certbot Renew
sudo su
cd /var/www/html/dg
docker-compose stop
certbot renew
ctrl + D
cd /var/www/html/dg
sudo kill `sudo lsof -t -i:443`
./vendor/bin/sail up
docker-compose exec laravel.test bash
npm run build
