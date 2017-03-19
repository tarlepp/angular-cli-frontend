import { Http } from '@angular/http';

import { TranslationLoader } from './translation-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslationLoader(http);
}
