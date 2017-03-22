import { MessageService } from './message.service';
import { ConfigService } from './config.service';

export * from './config.service';
export * from './message.service';

export const Services = [
  ConfigService,
  MessageService,
];
