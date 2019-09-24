FROM node:10.16.3-alpine
WORKDIR /usr/local/app/
COPY --chown=node:node . /usr/local/app/
RUN npm ci && npm run build
USER node
ENV PORT 8888
ENV DEV_SERVER_PORT 8899
EXPOSE 8888
EXPOSE 8899
CMD npm run start
