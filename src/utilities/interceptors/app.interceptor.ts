import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Request } from 'express';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MetricsService } from 'src/config/metrics/metrics.service';
import { METRIC_TYPE } from 'src/interfaces/metrics.interface';
import { TypeORMError } from 'typeorm';
@Injectable()
export class AppInterceptor implements NestInterceptor {
  constructor(private readonly metricService: MetricsService) {}
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((err) => {
        const request: Request = context.switchToHttp().getRequest();
        if (err instanceof TypeORMError) {
          this.updateMetrics(METRIC_TYPE.DATABASE);
        } else if (err instanceof HttpException) {
          this.updateMetrics(METRIC_TYPE.APPLICATION);
        } else {
          this.updateMetrics(METRIC_TYPE.UNKNOWN);
        }
        return throwError(
          () =>
            new HttpException(
              {
                message: err?.message || err?.detail || 'Something went wrong',
                timestamp: new Date().toISOString(),
                route: request.path,
                method: request.method
              },
              err.statusCode || 500
            )
        );
      })
    );
  }

  async updateMetrics(type: METRIC_TYPE) {
    switch (type) {
      case METRIC_TYPE.DATABASE:
        this.metricService.error_database.inc();
        break;
      case METRIC_TYPE.APPLICATION:
        this.metricService.error_application.inc();
        break;
      case METRIC_TYPE.MAIL_FAILURE:
        this.metricService.mail_failure_count.inc();
        break;
      default:
        this.metricService.error_unknown.inc();
    }
  }
}
