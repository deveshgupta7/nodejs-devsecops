# Stage 1 - Dependencies
FROM node:22-slim AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

# Stage 2 - Production Image
FROM node:22-slim

ENV NODE_ENV=production

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY src ./src
COPY package.json .

RUN groupadd --system nodeapp && \
    useradd --system --gid nodeapp nodeapp

USER nodeapp

EXPOSE 8080

CMD ["node", "src/server.js"]