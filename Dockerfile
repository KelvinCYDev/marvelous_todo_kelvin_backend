FROM node:latest

WORKDIR '/backend'

COPY ./package.json ./

COPY . .

RUN yarn install

EXPOSE 5000

CMD ["yarn", "run", "start"]