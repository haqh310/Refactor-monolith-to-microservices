FROM node:16 AS ionic
##FROM beevelop/ionic:latest AS ionic  
WORKDIR /usr/src/app
COPY package*.json ./

#RUN npm install -g npm@10.8.3
RUN npm ci --legacy-peer-deps
## --no-optional
COPY . .

 
RUN set NODE_OPTIONS=--openssl-legacy-provider 
RUN npm install -g @ionic/cli 
RUN ionic build 
## && ls -la /usr/src/app

## Run 
FROM nginx:alpine
COPY --from=ionic /usr/src/app/www /usr/share/nginx/html  