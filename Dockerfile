FROM node
RUN mkdir /petdetective
COPY . /petdetective
WORKDIR /petdetective
CMD ["rm", "package-lock.json"]
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]