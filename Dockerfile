FROM node:alpine
WORKDIR /user/botapp
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]