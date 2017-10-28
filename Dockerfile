FROM node:8.8.1
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
ENV NAME World
CMD ["node", "app.js"]