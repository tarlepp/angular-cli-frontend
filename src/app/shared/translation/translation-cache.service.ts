import { Injectable } from '@angular/core';

@Injectable()
export class TranslationCacheService {
  private cache: Object = {};
  private base: Object = {};

  /**
   * Method to store "base" domain translations to cache.
   *
   * @param {string}  language
   * @param {Object}  translations
   */
  public setBase(language: string, translations: Object): void {
    if (!this.base.hasOwnProperty(language)) {
      this.base[language] = {};
    }

    this.base[language] = translations;
  }

  /**
   * Method to check if current language + domain exists on cache or not.
   *
   * @param {string}  language
   * @param {string}  domain
   * @returns {boolean}
   */
  public cached(language: string, domain: string): boolean {
    return this.cache.hasOwnProperty(language) && this.cache[language].hasOwnProperty(domain);
  }

  /**
   * Method to store language + domain translations to cache.
   *
   * @param {string}  language
   * @param {string}  domain
   * @param {Object}  translations
   */
  public store(language: string, domain: string, translations: Object): void {
    if (!this.cache.hasOwnProperty(language)) {
      this.cache[language] = {};
    }

    this.cache[language][domain] = translations;
  }

  /**
   * Method to get translations for specified language + domain.
   *
   * @param {string}  language
   * @param {string}  domain
   * @returns {Object}
   */
  public get(language: string, domain: string): Object {
    return Object.assign({}, this.base[language], this.cache[language][domain]);
  }
}
