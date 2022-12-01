FROM mysql:8.0.23

ENV MYSQL_ROOT_PASSWORD=pass
ENV TZ=Asia/Tokyo


EXPOSE 3306

COPY ./my.cnf /etc/mysql/conf.d/my.cnf

CMD ["mysqld"]