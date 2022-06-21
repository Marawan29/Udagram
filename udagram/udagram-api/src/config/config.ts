import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "12345qwer",
  database: "udagram",
  port_db: 54321,
  host: "udagram.cqb8bmyscp11.us-east-1.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: "u-east-1",
  aws_profile: "default",
  aws_media_bucket: "udauda",
  url: "http://udauda.s3-website-us-east-1.amazonaws.com",
  jwt: {
    secret: "Manatarms",
  },
};
