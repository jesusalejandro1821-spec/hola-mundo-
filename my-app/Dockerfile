ARG UBUNTU_VERSION=24.04
FROM ubuntu:$UBUNTU_VERSION

RUN apt-get update && apt-get install -y \
    curl && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get clean

RUN apt-get install -y nodejs

WORKDIR /app

COPY . .