# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Node.js image to serve the built application
FROM node:14-alpine

# Install the serve package globally
RUN npm install -g serve

# Set the working directory in the container to /app
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=0 /app/dist .

# Expose port 5000 for the application
EXPOSE 5000

# Define the command to run the application
CMD [ "serve", "-s", ".", "-l", "5000" ]