export interface IMailRequestBody {
  to: string[];
  subject: string;
  text?: string;
  html?: string;
  cc?: [];
  bcc?: [];
}
