## Installation

```
npm i otp-generator [Module]
npm i --save-dev @types/otp-generator [for TypeScript inference]
```

[READ MORE](https://www.npmjs.com/package/otp-generator)

## App Usage

- Config Files | Options

  - Location - pm2 file
  - Options
    - minLength: number,
    - digits: boolean,
    - lowerCaseAlphabets: boolean,
    - upperCaseAlphabets: boolean,
    - specialChars: boolean

- Service

* Description - Via the Nest JS DI created a class to apply only one instance of this service. Include the service as a provider in app.module.ts and then can be injected in any module throughout the application
* Functions
  - generateOTP: Returns a string by a randomly generated OTp based on the configuration options provided.
