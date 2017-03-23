import { Injectable } from '@angular/core';

@Injectable()
export class TranslationCacheService {
  private cacheDomain: Object = {};
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
   * @returns {boolean}
   */
  public cached(language: string, domain: string): boolean {
    return this.cacheDomain.hasOwnProperty(language) && this.cacheDomain[language].hasOwnProperty(domain);
  }

  /**
   * Method to store language + domain translations to cache.
   *
   * @param {string}  language
   * @param {string}  domain
   * @param {Object}  translations
   */
  public store(language: string, domain: string, translations: Object): void {
    if (!this.cacheDomain.hasOwnProperty(language)) {
      this.cacheDomain[language] = {};
    }

    this.cacheDomain[language][domain] = translations;
  }

  /**
   * Method to get translations for specified language + domain.
   *
   * @param {string}  language
   * @param {string}  domain
   * @returns {Object}
   */
  public get(language: string, domain: string): Object {
    return Object.assign({}, this.cacheBase[language], this.cacheDomain[language][domain]);
  }
}
