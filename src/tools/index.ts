/*
 * @Date: 2020-06-01 15:47:12
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-10 10:34:16
 * @FilePath: /msg_push_pc/src/tools/index.ts
 */

import { random } from "lodash-es";
import moment from "moment";

const getNatural: (min?: number, max?: number) => number = (min, max) => {
    return random(min || 10000000, max || 99999999);
};

const getCurrentQ: () => string = () => {
    return `${moment().year()}-Q${Math.ceil((moment().month() + 1) / 3)}`;
};

const getUA: () => string | boolean = () => {
    const ua = navigator.userAgent.toLocaleLowerCase();
    if (ua.includes("window")) {
        return "windows";
    } else if (ua.includes("mac")) {
        return "mac";
    }
    return false;
};

const getBase64: (img: Blob, callback: (res: ArrayBuffer | string) => void) => void = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
};

export { getNatural, getCurrentQ, getUA, getBase64 };
