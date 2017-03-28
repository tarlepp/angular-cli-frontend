import { Injectable } from '@angular/core';

@Injectable()
export class TranslationCacheService {
  private cacheDomain: Object = {};
  private cacheCommon: Object = {};
  private cacheBase: Object = {};

  /**
   * Method to store "base" domain translations to cache.
   *
   * @param {string}  language
   * @param {Object}  translations
   */
  public base(language: string, translations: Object): void {
    if (!this.cacheBase.hasOwnProperty(language)) {
      this.cacheBase[language] = {};
    }

    this.cacheBase[language] = translations;
  }

  /**
   * Method to check if current language + domain exists on cache or not.
   *
   * @param {string}  language
   * @param {string}  domain
   * @param {boolean} common
   * @returns {boolean}
   */
  public cached(language: string, domain: string, common: boolean): boolean {
    const storage = common ? this.cacheCommon : this.cacheDomain;

    return storage.hasOwnProperty(language) && storage[language].hasOwnProperty(domain);
  }

  /**
   * Method to store language + domain translations to cache.
   *
   * @param {string}  language
   * @param {string}  domain
   * @param {Object}  translations
   * @param {boolean} common
   */
  public store(language: string, domain: string, translations: Object, common: boolean): void {
    if (!this.cacheCommon.hasOwnProperty(language)) {
      this.cacheCommon[language] = {};
    }

    if (!this.cacheCommon[language].hasOwnProperty('domain')) {
      this.cacheCommon[language][domain] = {};
    }

    if (!this.cacheDomain.hasOwnProperty(language)) {
      this.cacheDomain[language] = {};
    }

    if (!this.cacheDomain[language].hasOwnProperty('domain')) {
      this.cacheDomain[language][domain] = {};
    }

    common ? this.cacheCommon[language][domain] = translations : this.cacheDomain[language][domain] = translations;
  }

  /**
   * Method to get translations for specified language + domain.
   *
   * @param {string}  language
   * @param {string}  domain
   * @returns {Object}
   */
  public get(language: string, domain: string): Object {
    return Object.assign(
      {},
      this.cacheBase[language],
      this.cacheCommon[language][domain],
      this.cacheDomain[language][domain]
    );
  }
}
