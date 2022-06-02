FROM tomcat:9.0.55-jdk17-temurin

MAINTAINER sre@magnolia-cms.com

ENV JAVA_OPTS="-Dmagnolia.home=/opt/magnolia -Dmagnolia.author.key.location=/opt/magnolia/activation-key/magnolia-activation-keypair.properties"

ARG DOCKER_WARNAME

# Copy Tomcat setenv.sh
COPY src/main/docker/tomcat-setenv.sh $CATALINA_HOME/bin/setenv.sh
RUN chmod +x $CATALINA_HOME/bin/setenv.sh

# This directory is used for Magnolia property "magnolia.home"
RUN mkdir /opt/magnolia
RUN chmod 755 /opt/magnolia

ARG ARTIFACT_VERSION

RUN rm -rf $CATALINA_HOME/webapps/*
COPY nexum-core-project-webapp/target/$DOCKER_WARNAME.war $CATALINA_HOME/webapps/