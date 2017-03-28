import { Http } from '@angular/http';

import { TranslationLoader } from './translation-loader';
import { ConfigService } from '../services/config.service';
import { TranslationCacheService } from './services/translation-cache.service';

/**
 * AoT requires an exported function for factories
 *
 * @param {Http}                    http
 * @param {ConfigService}           configService
 * @param {TranslationCacheService} translationCacheService
 *
 * @returns {TranslationLoader}
 * @constructor
 */
export function HttpLoaderFactory(
  http: Http,
  configService: ConfigService,
  translationCacheService: TranslationCacheService
): TranslationLoader {
  return new TranslationLoader(http, configService, translationCacheService);
}
