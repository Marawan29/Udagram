# PIPLELINE
A pipeline is configured to continuously integrate the web application
## Pipleline process order
 - Push to github
   - Push the development code to github
 - Trigger CircleCI Workflow
   - CircleCi workflow start running
 - Signup/Prepare the environment
   - Setuo environment variables
   - Setup node.js
 - Checkout code from github
   - Ceckout the app code from the githun repo
 - Install Dependencies
   - Install frontend dependencies
   - Install backend dependencies
 - Lint and Build
   - Lint the code
   - Build the frontend
   - Build the backend
 - Prepare AWS CLI/EB
   - Setup AWS and EB CLIs
   - Configure IAM keys
 - Deploy the App
   - Deploy frontend to S3
   - Deploy backend to EB

![infrastructure diagram](./assets/pipeline.png)
