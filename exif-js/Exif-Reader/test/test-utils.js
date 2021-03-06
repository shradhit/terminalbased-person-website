/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import DataViewWrapper from '../src/dataview';

export {
    getArrayBuffer,
    getDataView,
    getCharacterArray,
    getConsoleWarnSpy
};

function getArrayBuffer(data) {
    return Buffer.from(Array.from(data).map((character) => character.charCodeAt(0)));
}

function getDataView(data) {
    return new DataViewWrapper(getArrayBuffer(data));
}

function getCharacterArray(string) {
    return string.split('').map((character) => character.charCodeAt(0));
}

function getConsoleWarnSpy() {
    /* eslint-disable no-console */
    const originalConsoleWarn = console.warn;

    const warnSpy = function () {
        warnSpy.hasWarned = true;
    };
    warnSpy.hasWarned = false;
    warnSpy.reset = function () {
        console.warn = originalConsoleWarn;
    };

    console.warn = warnSpy;

    return warnSpy;
    /* eslint-enable no-console */
}
