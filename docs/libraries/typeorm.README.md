## Installation

```
npm install --save @nestjs/typeorm typeorm pg [Module]
```

[READ MORE](https://docs.nestjs.com/techniques/database)

## App Usage

- Config Files | Options
  - Location - pm2 file [DB_CONFIG]
  - Options
    - type: 'postgres', // I have used postgres. You can use mysql
    - host: 'localhost', // Local Version
    - username: 'postgres', // Your username
    - password: 'root', // Make sure password is correct
    - database: 'medium', // Database name should match
    - entities: ['dist/database/**/*.entity.{ts,js}'], // you can use autoLoadEntities | I prefer this way - This will load all files ending with .entity.ts in database folder of dist folder
    - synchronize: true, // Mark it is as false in production
    - logging: true, // can use custom logger | or can turn off loggin by marking it as false

## Important point to note

- In this example I have used TypeOrm 0.3.10 | If you are coming from 0.2.\* version a lot of changes will be visible in using repository format.
- The pattern for using everything is [Data Mapper]] pattern & not [Active Record]

## Summary for how to use typeorm 0.3.10 with data mapper pattern

- Create entity as used iin all version
- Create repository file
  - Make sure to extend your file by `Repository<|Entity Name Here|>`
  - In the constructor make sure to call the parent class by
  - `constructor(private dataSource: DataSource) { super(|Your entity name here|, dataSource.createEntityManager()); } `
  - In the module that you need to use this repository
  - `In the providers add this repository name along with the service.`
