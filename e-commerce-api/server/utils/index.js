const { hashPassword, comparePassword } = require("./helper");
const { sendEmail } = require("./email");
const { uploadFile } = require("./s3");
const { validateJwt } = require("./validateJwt");
const { redisClient } = require("./redisClient");

const {
  userPool,
  AmazonCognitoIdentity,
  poolData,
  poolRegion,
} = require("./cognito");

module.exports = {
  hashPassword,
  comparePassword,
  sendEmail,
  uploadFile,
  poolData,
  poolRegion,
  userPool,
  AmazonCognitoIdentity,
  validateJwt,
  redisClient,
};
