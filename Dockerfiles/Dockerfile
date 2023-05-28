FROM mysql:latest

RUN chown -R mysql:root /var/lib/mysql/
ENV MYSQL_ROOT_PASSWORD=password

COPY ./schema.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
