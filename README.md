./vendor/bin/sail up
docker-compose exec laravel.test bash
npm run dev
php vendor/bin/vapor deploy production