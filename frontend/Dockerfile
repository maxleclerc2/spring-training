FROM node:17-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install @angular/core -g --silent
COPY . ./
RUN ng build

FROM nginx:stable-alpine
COPY --from=build /app/dist/angular-tour-of-heroes /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
