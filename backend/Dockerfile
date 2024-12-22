# my node version is v20.11.1

# Use the base Node.js image from Docker Hub
FROM node:20.11.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files to leverage Docker caching for dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Express app listens on
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
