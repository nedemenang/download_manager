# Use an official node runtime as a parent image
FROM node:12.16.1

WORKDIR /app/frontend/

# Install dependencies
COPY package*.json /app/frontend/

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Add rest of the client code
COPY . /app/frontend/

EXPOSE 3000

CMD ["npm", "start"]