FROM node:latest
WORKDIR /WorkStation
COPY package.json /WorkStation
RUN npm install
COPY . /app
EXPOSE 80
CMD npm start
