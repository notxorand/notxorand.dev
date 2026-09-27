# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=24.6.0
FROM node:${NODE_VERSION}-slim as base

# Nuxt app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Copy application code
COPY . .

RUN npm install pnpm -g

# Install node modules
RUN pnpm install --frozen-lockfile

# Build application
RUN pnpm build

# Remove development dependencies
# RUN npm prune --omit=dev


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
ENV HOST=0
CMD [ "node", "build/index.js" ]

