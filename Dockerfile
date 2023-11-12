FROM node:18-alpine

WORKDIR /react-vite-app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent
RUN npm install react-router-dom

COPY . ./

CMD ["npm", "run", "dev"]