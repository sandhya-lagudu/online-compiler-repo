FROM node:18-alpine
WORKDIR /app
RUN apk update && apk add --no-cache openjdk11 g++ python3 
COPY package.json .
COPY . .
EXPOSE 8080
RUN npm i
CMD ["npm","start"]