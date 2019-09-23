FROM node:10.16.3-alpine
WORKDIR /usr/local/app/
COPY --chown=node:node . /usr/local/app/
RUN npm ci && npm run build
USER node
ENV PORT 8888
EXPOSE 8888
CMD npm run start
