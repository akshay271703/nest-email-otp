// Otp Service
export interface IOtpConfig {
  minLength: number;
  digits: boolean;
  lowerCaseAlphabets: boolean;
  upperCaseAlphabets: boolean;
  specialChars: boolean;
}

// AWS Service
export interface IAwsConfig {
  region: string;
  apiVersion: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
}

// Database service
export interface IDatabaseConfig {
  type: string;
  host: string;
  username: string;
  password: string;
  database: string;
  entities: string[];
  synchronize: boolean;
  logging: boolean;
  keepConnectionAlive: boolean;
}
