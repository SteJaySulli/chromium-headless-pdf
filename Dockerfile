# We use ubuntu as a base as alpine is not capable of running
# an up to date version of chromium
FROM ubuntu
# Ensure base system is up to date
RUN apt-get update -y
RUN apt-get upgrade -y
# Curl is needed to install nvm in docker-install.sh
RUN apt-get install -y curl
# Install prerequisite libraries for chromium
RUN apt-get install -y libnss3 libatk-bridge2.0-0 libcups2 libxkbcommon0 libxdamage1 libgbm1 libpango-1.0-0 libcairo2 libasound2 libxcomposite1 libxfixes3 libxrandr2

# Copy only the pertinent files of our app into the /app 
# directory within the container
COPY src /app/src
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json
COPY webpack.config.js /app/webpack.config.js
COPY docker-start.sh /app/docker-start.sh
COPY docker-install.sh /app/docker-install.sh

# Install nvm and our application
RUN /app/docker-install.sh

# Expose ports for server
EXPOSE 3000:3000

# Start the server
CMD bash /app/docker-start.sh