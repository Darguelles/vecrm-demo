# Get node image in docker
#FROM node:6.9.2
FROM node:4.3.2

# Enviroment configuration
RUN  npm install -g npm #webpack webpack-dev-server karma-cli protractor typescript

#Define HOME as enviroment variable
ENV HOME=/var/www

USER root
COPY package.json $HOME/vztemplate/

WORKDIR $HOME/vztemplate
RUN npm install

#USE IT ON PROD ENVIROMENT
#COPY . $HOME/vztemplate

CMD  ["npm", "start"]
