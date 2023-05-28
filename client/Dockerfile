FROM node:latest
RUN echo "Building frontend..."

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/client

WORKDIR /usr/src/app/client

RUN chmod 755 .

COPY package*.json ./
RUN npm install
#RUN npm install -g yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
