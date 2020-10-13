/*
 * @Author: tff
 * @Date: 2020-08-10 18:53:05
 * @LastEditTime: 2020-08-10 18:54:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /msg_push/oa_msg_push_pc/src/tools/copy.ts
 */
const copyToClip = (content: string) => {
    const aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
};
export {copyToClip}