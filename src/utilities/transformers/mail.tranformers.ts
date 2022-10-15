import { SES } from 'aws-sdk';
import envConfig from 'src/env/env.config';
import { IMailRequestBody } from 'src/interfaces/mail.interface';
const MAIL_TO_DEFAULT = envConfig().MAIL_TO_DEFAULT;

export const transformMailBody = (options: IMailRequestBody): SES.SendEmailRequest => {
  const body = {
    Destination: {
      ToAddresses: options.to
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: options.text
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: options.subject
      }
    },
    Source: MAIL_TO_DEFAULT
  };
  if (options.html) {
    body.Message.Body['Html'] = {
      Charset: 'UTF-8',
      Data: options.html
    };
  }
  return body;
};
