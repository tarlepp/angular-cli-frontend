import { Injectable, Inject } from '@angular/core';

@Injectable()
export class ConfigService {
  /**
   * Construct of the class
   *
   * @param {Window} window
   */
  constructor(@Inject('Window') private window: any) { }

  /**
   * Getter method for used env variables.
   *
   * @param {string}  section
   * @returns {any}
   */
  public get(section: string): any {
    return this.window.__env[section];
  }

  /**
   * Short hand method to get current API URL.
   *
   * @returns {string}
   */
  public getApiUrl(): string {
    return this.get('API_URL');
  }
}
