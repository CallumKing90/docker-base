FROM node:latest

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN npm install yarn
RUN yarn

COPY . .

CMD ["yarn", "start"]