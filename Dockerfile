FROM NOde:alpine

WORKDIR  ./

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
