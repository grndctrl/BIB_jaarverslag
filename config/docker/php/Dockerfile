FROM php:7.3-apache

RUN apt-get update -y && \
    apt-get install -y \
        unzip \
        libpq-dev \
        libzip-dev \
        zlib1g-dev \
        libmagickwand-dev
        
RUN a2enmod expires && \
    a2enmod rewrite 

RUN docker-php-ext-install intl pdo_pgsql pdo_mysql zip

RUN pecl install imagick && \
    docker-php-ext-enable imagick

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# RUN curl -sL https://deb.nodesource.com/setup_12.x | bash && \ 
#     apt-get install nodejs -y

# EXPOSE 8080

# WORKDIR /var/www/app