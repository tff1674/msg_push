/*
 * @Date: 2020-04-29 17:05:14
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-08-06 15:16:07
 * @FilePath: /msg_push_pc/config/version/base.js
 */

const getThisMoment = () => {
    return new Date().getTime();
};

module.exports = {
    getThisMoment,
};
