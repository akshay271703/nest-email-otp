export default () => ({
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DB_CONFIG: JSON.parse(process.env.DB_CONFIG),
  AWS_CONFIG: JSON.parse(process.env.AWS_CONFIG),
  OTP_CONFIG: JSON.parse(process.env.OTP_CONFIG),
  BCRYPT_ROUNDS: +process.env.BCRYPT_ROUNDS,
  MAIL_TO_DEFAULT: process.env.MAIL_TO_DEFAULT
});
