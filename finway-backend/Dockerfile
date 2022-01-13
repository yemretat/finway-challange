# Coud be useful for deployment.

# Create image from:
FROM node:alpine

# Creating a new directory for app files and setting path in the container
RUN mkdir -p /finway-challange && chown -R node:node /finway-challange

# setting working directory in the container
WORKDIR /finway-challange

# grant permission of node project directory to node user

COPY --chown=node:node . . 

RUN npm install


EXPOSE 5000


CMD [ "npm", "start" ]


