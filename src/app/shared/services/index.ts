import { MessageService } from './message.service';
import { ConfigService } from './config.service';
import { TranslationService } from './translation.service';

export * from './config.service';
export * from './message.service';
export * from './translation.service';

export const Services = [
  ConfigService,
  MessageService,
  TranslationService
];
