import { MessageService } from './message.service';
import { ConfigService } from './config.service';

export * from './message.service';
export * from './config.service';

export const Services = [
  MessageService,
  ConfigService,
];
