## Installation

```
npm install @willsoto/nestjs-prometheus prom-client [Module]
```

[READ MORE](https://github.com/willsoto/nestjs-prometheus)

## App Usage

- Config Files | Options
  - Location - src/config/metrics/metrics.types.ts
  - Available Metrics
    - Number of database errors
    - Number of runtime errors
    - Number of unknown errors
    - Number of mails sent successfully'
    - Number of mails unsuccessful

## View Metrics

  Visit [GET] ```/metrics``` to view the metrics counter.

## Determination of how to increase metric count

```Use the method instanceof on error instance``` and it will tell you which type of error it is. 
```Example All Typeorm errors will return true to the above code ```
- If you want to dig deep into different types of errors
- See the tree hierarchy to list all the typeorm identified errors
- node_modules/typeorm/errors/nidex.js