FROM NOde:alpine

WORKDIR  ./

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
