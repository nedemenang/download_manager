# Use an official node runtime as a parent image
FROM node:12.16.1

WORKDIR /app/backend/

# Install dependencies
COPY package*.json /app/backend/

RUN npm install --silent

# Add rest of the client code
COPY . /app/backend/

EXPOSE 4000

CMD ["npm", "run", "start:prod"]
