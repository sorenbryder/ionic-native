var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var Wikitude = (function () {
    function Wikitude() {
    }
    Wikitude.prototype.isDeviceSupported = function (requiredFeatures) { return; };
    Wikitude.prototype.requestAccess = function (requiredFeatures) { return; };
    Wikitude.prototype.loadARchitectWorld = function (architectWorldPath, requiredFeatures, startupConfiguration) { return; };
    Wikitude.prototype.setOnUrlInvokeCallback = function (onUrlInvokeCallback) { return; };
    Wikitude.prototype.callJavaScript = function (js) { return; };
    Wikitude.prototype.close = function () { return; };
    Wikitude.prototype.hide = function () { return; };
    Wikitude.prototype.show = function () { return; };
    return Wikitude;
}());
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Wikitude.prototype, "isDeviceSupported", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Wikitude.prototype, "requestAccess", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Object]),
    __metadata("design:returntype", Promise)
], Wikitude.prototype, "loadARchitectWorld", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Wikitude.prototype, "setOnUrlInvokeCallback", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Wikitude.prototype, "callJavaScript", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Wikitude.prototype, "close", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Wikitude.prototype, "hide", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Wikitude.prototype, "show", null);
Wikitude = __decorate([
    Plugin({
        pluginName: 'Wikitude',
        repo: 'https://github.com/Wikitude/wikitude-cordova-plugin.git',
        plugin: 'com.wikitude.phonegap.wikitudeplugin',
        pluginRef: 'WikitudePlugin',
        platforms: ['Android', 'iOS']
    }),
    Injectable()
], Wikitude);
export { Wikitude };
