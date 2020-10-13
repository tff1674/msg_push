/*
 * @Date: 2020-02-28 14:23:31
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-28 12:13:10
 * @FilePath: /ApprovalFlow/src/tools/array.ts
 */
import { cloneDeep } from "lodash-es";
// 简单数组取并集(误凸(艹皿艹 )  去重)
const arrays2Union: (args: never[]) => any[] = (...args: any[]) => {
    let arr: any[] = [];
    args.map((item) => {
        if (Array.isArray(item)) {
            arr = arr.concat(arr, item);
        }
    });
    return Array.from(new Set(arr));
};

const list2Tree = (
    data: any[],
    rootParentFieldValue: any = 0,
    childField: any = "id",
    parentField: any = "parentId",
    children: any = "children",
): any[] => {
    const treeMap = new Map();
    data.map((item) => {
        treeMap.set(item[childField], item);
    });
    for (const d of data) {
        const parentId = d[parentField];
        if (treeMap.has(parentId)) {
            const parentDep = treeMap.get(parentId);
            parentDep[children] = parentDep[children] || [];
            parentDep[children].push(d);
        }
    }
    return data.filter((item) => item[parentField] === rootParentFieldValue);
};

const tree2List = (data: { [index: string]: any }[], children: string, result: { [index: string]: any }[]): void => {
    const current = cloneDeep(data);
    current.map((item) => {
        if (Object.prototype.hasOwnProperty.call(item, "children")) {
            tree2List(item[children], children, result);
            delete item[children];
        }
        result.push(item);
    });
};

export { arrays2Union, list2Tree, tree2List };
