import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

const counterList = [
  {
    name: 'error_database',
    help: 'Number of database errors'
  },
  {
    name: 'error_application',
    help: 'Number of runtime errors'
  },
  {
    name: 'error_unknown',
    help: 'Number of unknow errors'
  },
  {
    name: 'mail_success_count',
    help: 'Number of mails sent successfully'
  },
  {
    name: 'mail_failure_count',
    help: 'Number of mails unsuccessful'
  }
];

export const PROMETHEUS_METRICS_TYPES = counterList.map((el) => {
  return makeCounterProvider({
    name: el.name,
    help: el.help
  });
});
