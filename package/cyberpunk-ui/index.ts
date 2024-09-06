/*
 * @Author: anxueyu
 * @Date: 2024-07-30 14:32:01
 * @LastEditors: anxueyu 1358042645@qq.com
 * @LastEditTime: 2024-09-02 19:23:15
 * @FilePath: \cyberpunk-ui\package\cyberpunk-ui\index.ts
 * @Description: 
 */
import installer from './defaults'
export * from './make-installer'
console.log(
    '%c %s',
    'border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)',
    'CyberPunk-UI'
);
export const install = installer.install
export default installer
