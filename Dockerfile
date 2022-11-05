FROM node:18-alpine AS build
WORKDIR /build
ENV REACT_APP_BACKEND_URL=https://code-for-all-backend.herokuapp.com\
    REACT_APP_YOUR_KEY_ID=rzp_live_5Ok7Ayky3icNT7\
    REACT_APP_YOUR_KEY_SECRET=maAxGQDFeKKlU8iTZsB2fByY

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

FROM httpd:alpine
WORKDIR /usr/local/apache2/htdocs
COPY --from=build /build/build/ .
RUN chown -R www-data:www-data /usr/local/apache2/htdocs \
    && sed -i "s/Listen 80/Listen \${PORT}/g" /usr/local/apache2/conf/httpd.conf