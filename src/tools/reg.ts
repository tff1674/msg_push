/*
 * @Date: 2020-08-10 10:34:10
 * @LastEditors: Please set LastEditors
 * @description:
 * @LastEditTime: 2020-08-19 17:55:25
 * @FilePath: /msg_push_pc/src/tools/reg.ts
 */

/**
 * @description: 正则校验IP格式
 * @param {string} ip
 * @return {boolean}
 */
const IPTest: (ip: string) => boolean = (ip: string) => {
    if (!ip) return false;
    const reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return reg.test(ip);
};

export { IPTest };
