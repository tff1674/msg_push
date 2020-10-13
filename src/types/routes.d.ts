/*
 * @Date: 2020-04-10 17:00:18
 * @LastEditors: Hans
 * @description:
 * @LastEditTime: 2020-06-02 14:09:55
 * @FilePath: /okr/src/types/routes.d.ts
 */
export declare namespace TRoute {
    interface IRoute {
        path: string;
        name: string;
        key: string;
        component: React.FC<{ routes: IRoute[] }>;
        hidden?: boolean;
        routes?: Array<IRoute>;
        exact?: boolean;
    }
}
