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

# HELLO OUIVALO
RUN echo -e "\x1b[1;32m------------------------------\n\nHello Ouivalo ! \nThanks \
for evaluating this project \!\n\n------------------------------\e[0m"

# COPY WORK FOLDER IN CONTAINER
COPY React-form-LEMESLE-THEO .

# LAUNCH THE PROJECT
WORKDIR react-form
