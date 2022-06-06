FROM node:current
# COPY localPath containerPath - needed for npm install
# Copies everything in local to container
WORKDIR /usr/app
COPY ./package.json /usr/app
RUN npm install
COPY ./ ./
CMD ["npm", "start"]