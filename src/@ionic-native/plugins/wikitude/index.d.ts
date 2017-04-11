export declare class Wikitude {
    static isDeviceSupported(requiredFeatures: string[]): Promise<any>;
    static requestAccess(requiredFeatures: string[]): Promise<any>;
    static loadARchitectWorld(architectWorldPath: string, requiredFeatures: string[], startupConfiguration: Object): Promise<any>;
    static setOnUrlInvokeCallback(onUrlInvokeCallback: Function): void;
    static callJavaScript(js: string): void;
    static close(): void;
    static hide(): void;
    static show(): void;
}
