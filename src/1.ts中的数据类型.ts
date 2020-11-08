/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-11-08 19:59:15
 * @description: TS 中拥有的 类型
 */

//1. 基础类型
let num: number = 10;
let str: string = 'hello'
let bool: boolean = true

// 2. 元组类型
let tuple: [string, number, boolean] = ['Gene', 11, false];
// 不能通过索引添加内容, 可以向 元组中添加内容.
tuple.push('杨阳');

// 3. 数组 存放一类类型的集合.
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['Gene'];

// 4. 联合类型 可以看做并集, 可以使用联合的类型其中的.
let arr3: (string | number)[] = ['Gene', 1, 2, 3];


//5. 枚举类型
enum USER_ROLE {
    USER = 'a', //默认下标是从0 开始
    ADMIN = 0,
    MANAGER,
}

// 默认可以正向取出, 也可以反取
// 异构枚举, 可以在枚举中放不同的类型, 可以通过数字 自动向下推断
// console.log(USER_ROLE.USER, USER_ROLE[0]);

// 常量枚举 只是提供了一个类型
const enum USER_ROLE2 { // 更语义化
    USER,
    ADMIN,
}

console.log(USER_ROLE2.USER);

// any 类型, 不进行类型检测, 相当于没写类型
let arr: any = ['字符串', 123, true];

// null 和 undefined 类型
let str2: number | string;
// str2 = undefined // 非严格模式才可以

// void 空类型 只能接收 null 和 undefined
// let v: void
// v = null // 默认在严格模式下,不能将 null 赋给 void,非严格模式才可以

// never 类型 永远不, 是任何类型的子类型, 可以把 never 赋给任何类型
// 永远达不到的情况有三种
//1. 出错误 2. 死循环 3. 类型判断时 会出现 never
function MyError(): never {
    throw new Error("err")
}

// Symbol 类型 BigInt 类型
let s1 = Symbol('123')


// 对象类型  非原始数据类型
const create = (obj: object) => {

}
create({})
create([])
create(function () {
})
