## Response Interceptor

The application uses a `global response interceptor` at a global level. This will make sure -

- You can handle all errors centrally,
- Centralised Logging,
- Centralised Metrics [Prometheus/Grafana],
- Construct a generic error handler,

### How does an interceptor work ?

Whenever an error occours throughout the application, either you manually throw an error or is generated at runtime. The next piece of code is not executed and the application flow will directly land to interceptor.
Example

Controller[1] -> Service[2] -> Repository[3] -> Database call[4]

````
-Suppose an error occoured in Repository. If you have a catch block and you again throw an error.
- It will not return to level [2] -> [1] -> return response. The code will exit at [3], and will be caught by interceptor.
- We can make use of this by not surrounding code in [EVERY] try catch block. If you want to handle each error separately then yes you will need to rely on try-catch blocks
- If not, then you can handle all errors inside the interceptor
- In the interceptor you can catch error and return response like
- ```{ message: error.message, timestamp: new Date(), path: request.path }```
- and create other generic functions to perform more work.
- In this approach, since all errors pass through this code. You can apply centralised logging. Check if you want to log such type of errors [By using instance of]
- ```shouldLog = error instanceof TypeOrmError ? true : false```
````

### Other point to note

Nest JS also provide exception filters. This is useful whenever you throw and exception in your application. Example being `throw new HttpException(error, code)`. In this global filter you can customize the request as well as response. One major difference between interceptor and exception filter is that interceptor catches both exceptions as well as errors.

### How to apply interceptor

In app.module.ts providers include the following
`{ provide: APP_INTERCEPTOR, useClass: <YOUR Interceptor here> }`

### Structure of an interceptor

```
export class <INTERCEPTOR NAME> implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        return throwError(
          () =>
            <DO SOMETHING>
            )
        );
      })
    );
  }
}
Instead of catchError you can use the functiion tap to forward the request to next handler
```
