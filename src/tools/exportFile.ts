/*
 * @Date: 2020-04-16 10:33:42
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-07-14 17:43:00
 * @FilePath: /ApprovalFlow/src/tools/exportFile.ts
 */
const downloadFile = (url: string): void => {
    const a = document.createElement("a");
    const BASE_URL = process.env.NODE_ENV === "development" ? "http://eim-pre.infox.hupu.io" : window.location.origin;
    const file = url.split("/");
    const filename = file[file.length - 1];
    a.href = `${BASE_URL}${url}`;
    a.download = filename;
    a.click();
};

export { downloadFile };
