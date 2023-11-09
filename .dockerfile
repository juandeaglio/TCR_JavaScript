FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json jest.config.js tsconfig.json webpack.config.js ./
RUN npm install
COPY src ./src
COPY test ./test

CMD ["npm", "test"]