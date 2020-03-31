#!/usr/bin/env bash

# install craft
docker-compose exec web composer create-project craftcms/craft /var/www/private/craft;

# install plugins
docker-compose exec -w /var/www/private/craft web composer require nystudio107/craft-twigpack
docker-compose exec -w /var/www/private/craft web composer require ether/seo
docker-compose exec -w /var/www/private/craft web composer require craftcms/redactor
docker-compose exec -w /var/www/private/craft web composer require verbb/super-table

# copy config files
cp -r ./server/private/craft/web/ ./server/public/; cp ./config/public/index.php ./server/public;

# create tables
docker-compose exec web /var/www/private/craft/craft install --email=anonymous@mail.com --site-url=http://localhost:8080 --language=en-GB;