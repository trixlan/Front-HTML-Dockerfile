FROM registry.redhat.io/rhel8/httpd-24
COPY . /var/www/html/
CMD run-httpd