# Version node:12
FROM node:10-alpine

#python
RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

# Application Start
CMD ["npm", "start"]