#!/bin/bash

# Set variables
DOCKER_USERNAME="nhquocvinh"
IMAGE_NAME="bmgd-landing"
TAG="latest"

# Build the Docker image
echo "Building Docker image..."
docker build -t $DOCKER_USERNAME/$IMAGE_NAME:$TAG . --no-cache=true --platform=linux/amd64

# Login to Docker Hub
echo "Logging in to Docker Hub..."
docker login

# Push the image to Docker Hub
echo "Pushing image to Docker Hub..."
docker push $DOCKER_USERNAME/$IMAGE_NAME:$TAG

echo "Done! Image is now available at $DOCKER_USERNAME/$IMAGE_NAME:$TAG"
