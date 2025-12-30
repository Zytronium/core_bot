export interface message {
  message: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}