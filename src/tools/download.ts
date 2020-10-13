/*
 * @Author: tff
 * @Date: 2020-08-14 11:24:14
 * @LastEditTime: 2020-08-14 11:25:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /msg_push/oa_msg_push_pc/src/tools/download.ts
 */
const down = () => {
    var img = document.getElementById("download");
    var url = img.src;
    var a = document.createElement("a");
    var event = new MouseEvent("click");
    a.download = "pic";
    a.href = url;
    a.dispatchEvent(event);
};
export {down}