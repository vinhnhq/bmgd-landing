#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Set variables
EC2_HOST="ec2-52-194-23-241.ap-northeast-1.compute.amazonaws.com"
PEM_FILE="$SCRIPT_DIR/id_rsa-bmgd-prod-app-server.pem"
DOCKER_USERNAME="nhquocvinh"
IMAGE_NAME="bmgd-landing"
TAG="latest"

# SSH into EC2 and run deployment commands
ssh -i $PEM_FILE ubuntu@$EC2_HOST <<EOF
  # Create project directory if it doesn't exist
  sudo mkdir -p /var/www/bmgd-landing
  sudo chown ubuntu:ubuntu /var/www/bmgd-landing

  # Create or update docker-compose.yml
  cat > /var/www/bmgd-landing/docker-compose.yml << 'EOFINNER'

services:
  nextjs:
    image: $DOCKER_USERNAME/$IMAGE_NAME:$TAG
    container_name: bmgd-landing
    restart: always
    ports:
      - "3100:3000"
    environment:
      - NODE_ENV=production
      - HOSTNAME=0.0.0.0
      - PORT=3000
EOFINNER

  # Pull the latest image
  cd /var/www/bmgd-landing
  sudo docker pull $DOCKER_USERNAME/$IMAGE_NAME:$TAG

  # Stop and remove existing container if it exists
  sudo docker-compose down

  # Start the container
  sudo docker-compose up -d

  echo "Deployment completed successfully!"
EOF
