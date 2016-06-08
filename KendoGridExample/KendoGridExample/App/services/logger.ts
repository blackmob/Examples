/// <reference path="../../Scripts/typings/toastr/toastr.d.ts" />
/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />

import _system = require('durandal/system');


export enum ToastType {
    info,
    error,
    warning
}

export interface ILogMessage {
    message: string;
    data: Object;
    source: string;
    showToast: boolean;
    toastType?: ToastType;
    showAlert? : boolean; 
}

export interface ILogger {
    log(logMessage: ILogMessage): void;
    logError(logMessage: ILogMessage): void;
    logIt(logMessage: ILogMessage): void;
}


export class Logger<TLogMessage extends ILogMessage> implements ILogger {

    log(logMessage: ILogMessage): void {
        logMessage.toastType = ToastType.info;
    this.logIt(logMessage);
}

logError(logMessage: ILogMessage): void {
    logMessage.toastType = ToastType.error;
if (logMessage.showAlert) {
    bootbox.alert(logMessage.message);
} else {
    this.logIt(logMessage);
}
}

logIt(logMessage: ILogMessage): void {
    logMessage.source = logMessage.source ? '[' + logMessage.source + '] ' : '';
if (logMessage.data) {
    _system.log(logMessage.source, logMessage.message, logMessage.data);
} else {
    _system.log(logMessage.source, logMessage.message);
}
if (logMessage.showToast) {
    if (logMessage.toastType === ToastType.error) {
        toastr.error(logMessage.message);
    } else {
        toastr.info(logMessage.message);
    }
}
}
}

export var logger = new Logger();

