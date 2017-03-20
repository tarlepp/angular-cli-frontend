import { Http } from '@angular/http';

import { TranslationLoader } from './translation-loader';
import { ConfigService } from '../services/config.service';

/**
 * AoT requires an exported function for factories
 *
 * @param {Http}          http
 * @param {ConfigService} configService
 * @returns {TranslationLoader}
 * @constructor
 */
export function HttpLoaderFactory(http: Http, configService: ConfigService): TranslationLoader {
  return new TranslationLoader(http, configService);
}
