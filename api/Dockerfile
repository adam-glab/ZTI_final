FROM node:latest
RUN echo "Building backend..."

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/api

WORKDIR /usr/src/app/api
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
