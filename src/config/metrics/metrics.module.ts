import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsService } from './metrics.service';
import { PROMETHEUS_METRICS_TYPES } from './metrics.types';

@Module({
  imports: [
    PrometheusModule.register({
      path: '/metrics'
    })
  ],
  providers: [MetricsService, ...PROMETHEUS_METRICS_TYPES],
  exports: [MetricsService]
})
export class MetricsModule {}
