FROM node:18-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN npm ci --only=production
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]