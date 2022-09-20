# LINUX ENVIRONNEMENT
FROM debian:buster

# BASICS
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install vim

# INSTALL NPM NODE.JS REACT
RUN apt install nodejs npm -y
RUN apt install curl -y
RUN npm cache clean -f
RUN npm install -g n
RUN n stable

# COPY WORK FOLDER IN CONTAINER
COPY React-form-LEMESLE-THEO .

# SET UP WORKDIR
WORKDIR react-form

# WELCOME MESSAGE
CMD bash welcomeMessage.sh