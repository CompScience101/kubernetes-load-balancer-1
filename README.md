# Kubernetes Load Balancer
> My demo to test load balancer in Kubernetes 


## Kubernetes source code files
- nodejs-deployment.yaml
- nodejs-service.yaml

## Node.js source code
- index.js

## Frontend source code
- templates/index.html
- other files related html to files in templates folder


## Kubernetes instructions
1. Create your kubernetes master VM and kubernetes agent VM's
2. Install kubernetes on master VM and agent VM's
3. Configure kubernetes on master VM and agent VM's 
4. Deploy my kubernetes source code
5. Get the IP of my kubernetes load balancer and visit this ip address(with home path) in your browser,
  then follow the instructions on the webpage
  
## .gitlab-ci.yml Instructions
- Run this file on Gitlab to use it.
- You will need to enter your Docker Hub credentials in this file to push to dockerhub, which will be used by Kubernetes. Either use your own gitlab environment variables or replace the environment variabls with your hardcode credentials.

## heroku.yml Instructions
1. Run this file on heroku to use it. 
