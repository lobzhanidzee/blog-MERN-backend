import { config } from "dotenv";

config();

const requiredEnvVars = ["MONGODB_URI"];

requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
  }
});

export const MONGODB_URI = process.env.MONGODB_URI;
