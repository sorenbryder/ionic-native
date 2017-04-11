/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Wikitude
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { Wikitude } from 'ionic-native';
 *
 *
 * constructor(private wikitude: Wikitude) { }
 *
 * ...
 *
 *
 * this.wikitude.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Wikitude',
  repo: 'https://github.com/Wikitude/wikitude-cordova-plugin.git',
  plugin: 'com.wikitude.phonegap.wikitudeplugin',
  pluginRef: 'WikitudePlugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Wikitude {

  @Cordova({
    callbackOrder: 'reverse'
  })
  isDeviceSupported(requiredFeatures: string[]): Promise<any> { return; }

  @Cordova({
    callbackOrder: 'reverse'
  })
  requestAccess(requiredFeatures: string[]): Promise<any> { return; }

  @Cordova({
    callbackOrder: 'reverse'
  })
  loadARchitectWorld(architectWorldPath: string, requiredFeatures: string[], startupConfiguration: Object): Promise<any> { return; }

  @Cordova()
  setOnUrlInvokeCallback(onUrlInvokeCallback: Function): void { return; }

  @Cordova()
  callJavaScript(js: string): void { return; }

  @Cordova()
  close(): void { return; }

  @Cordova()
  hide(): void { return; }

  @Cordova()
  show(): void { return; }


}
