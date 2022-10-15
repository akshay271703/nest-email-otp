## Installation

```bash
$ npm install
# for running application
npm i pm2 -g
```

## Running the app

```bash
# development
$ npm run start:pm2
```

### Before Running application

````bash
Make sure to install pm2 (globally, if you like)
  * create a file pm2-bash.config.js in the root directory
  * The configuration file looks like this format

  ```bash
  module.exports = {
  apps: [
    {
      name: 'Nest Email Otp Auth',
      script: 'dist/main.js',
      env_development: {
        PORT: 3000,
        NODE_ENV: 'development',
        DB_CONFIG: JSON.stringify({
          type: 'postgres',
          host: 'localhost',
          username: '<YOUR USERNAME>',
          password: '<YOUR PASSWORD',
          database: '<YOUR DATABASE',
          entities: ['dist/database/**/*.entity.{ts,js}'],
          synchronize: <true or false>,
          logging: true,
          keepConnectionAlive: true
        }),
        AWS_CONFIG: JSON.stringify({
          region: '<YOUR AWS REGION>',
          apiVersion: '2010-12-01',
          credentials: {
            accessKeyId: '<YOUR AWS ACCESS KEY ID>',
            secretAccessKey: '<YOUR AWS SECRET KEY ACCESS>'
          }
        }),
        OTP_CONFIG: JSON.stringify({
          minLength: 6,
          digits: true,
          lowerCaseAlphabets: false,
          upperCaseAlphabets: false,
          specialChars: false
        }),
        BCRYPT_ROUNDS: 10,
        MAIL_TO_DEFAULT: <YOUR VERIFIED SES EMAIL>,
      }
    }
  ]
};

````

```

```
