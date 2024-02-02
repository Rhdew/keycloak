# Use an official Node.js image as the base image
FROM node:20.11-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json .

# Install dependencies
RUN npm install

EXPOSE 5173

# Copy the rest of the application code to the container
COPY * /app

# Start the React app
CMD ["npm", "run", "dev"]