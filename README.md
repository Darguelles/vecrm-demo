# VECRM Dashboard V2.0 [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](https://angularclass.com/slack-join) [![Join the chat at https://gitter.im/angularclass/angular2-webpack-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angularclass/angular2-webpack-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Docker Quick Start

- Clone the project from the repository inside the C:/Users/* folder (Only if you're using Windows)
- Download Docker from [Docker getting started Windows guide](https://docs.docker.com/docker-for-windows/)

Execute Docker Quickstart Terminal - cd into your project root folder and put the following command:

```bash
$ docker-compose up
```
This command will download the image specified in the Dockerfile of the project. Maybe can take a few minutes to download all the dependencies, once finished the project will be deployed inside the container and you can access from your host browser:

Project [url](http://192.168.99.100:3000)

By default, the port 3000 is configured to be exposed, it can be changed in the dockerfile.

###Issues

Some Windows version can present problems with the docker-compose.yml specification address, to solve this issue run the docker-compose up command with the following prefix:

```bash
$ COMPOSE_CONVERT_WINDOWS_PATHS=1 docker-compose up
```

If you need to do changes in the Dockerfile or docker-compose.yml, run the following command to update the container:

```bash
$ docker-compose build
```

Voilà! Now you have an application running inside a docker container and listening to any changes you make inside the code.  


# License
 [Verizon](/LICENSE)
