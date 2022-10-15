import { Injectable } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Injectable()
export class MetricsService {
  constructor(
    @InjectMetric('error_database') public error_database: Counter<string>,
    @InjectMetric('error_application') public error_application: Counter<string>,
    @InjectMetric('error_unknown') public error_unknown: Counter<string>,
    @InjectMetric('mail_success_count') public mail_success_count: Counter<string>,
    @InjectMetric('mail_failure_count') public mail_failure_count: Counter<string>
  ) {}
}
