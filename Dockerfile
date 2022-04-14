FROM node:16
# 04/11/2022 v16.14.2
# 2021 v12.19.0

ENV MY_POD_NAME=dockerTEST2
ENV MY_POD_IP=dockerTEST1
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# if your building a local version
# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
RUN npm ci --only=production

COPY . .


CMD node index.js
