import { config } from "dotenv";

config();

const requiredEnvVars = ["MONGODB_URI", "PORT"];

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
  }
});

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 8080;
