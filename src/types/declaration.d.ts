/*
 * @Date: 2020-04-14 17:12:43
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-07-16 16:52:45
 * @FilePath: /ApprovalFlow/src/types/declaration.d.ts
 */
declare module "*.less";

declare module "*.scss";

declare module "*.svg";

declare module "*.png";

declare module "*.jpg";

declare module "*.jpeg";

declare module "*.gif";

declare module "*.md" {
    const content: string;
    export default content;
}

declare module "rc-animate";
