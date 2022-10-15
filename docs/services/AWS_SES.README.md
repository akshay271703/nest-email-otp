## Installation

```
npm i aws-sdk [Module]
```

[READ MORE](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html)

## App Usage

* Config Files | Options
  * Location - pm2 file [AWS_CONFIG]
  * Options
    * region [MANDATORY]
    * credentials [MANDATORY]
    * apiVersion [OPTIONAL]

* Service
- Description - constructor initializes the application with config object. Then initialize the class variable sesService to intantiate the ses module.
- Functions 
  * sendEmail: Send Email via SES

### Points to Note for sending and receiving emails

  * You must send the message from a verified email address or domain.

  * If your account is still in the Amazon SES sandbox, you can only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator.

  * The total size of the message, including attachments, must be smaller than 10 MB.

  * The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message is rejected, even if the message contains other recipients that are valid.

  * The message cannot include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the sendEmail method several times to send the message to each group.