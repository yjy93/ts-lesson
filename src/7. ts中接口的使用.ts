// 接口 接口可以认为是用来 描述对象的形状, 根据接口, 可以提供一些新的类型, 为别人使用

// 计算 fullName = firstName + lastName


// 1) 接口描述对象
// interface IFullName {
//     firstName: string,
//     lastName: string
// }
//
// // interface 可以描述 (属性,  方法, 类)
// const fullName = (obj: IFullName): IFullName => {
//     return obj
// }
// fullName({firstName: '杨', lastName: '阳'})


// 2) 接口描述函数本身
// type fullName = (firstName: string, lastName: string) => string

// interface IFullName {
//     (firstName: string, lastName: string): string // 接口描述函数本身
// }
//
// const fullName = (firstName: string, lastName: string): string => {
//     return firstName + lastName
// }
//
// // 混合类型 标识一个函数返回一个函数, 返回的函数有属性
// interface ICount {
//     (): number,
//
//     count: number
// }
//
// const fn: ICount = () => {
//     return ++fn.count
// }
// fn.count = 0
// console.log(fn());
// console.log(fn());

// 3) 接口特性
// interface IVegetables {
//     taste: string,
//     color: string,
// }

// 1. 第一种方案
// 如果我定义的值,比接口中的多,可以采用 类型断言, 直接断言成对应的接口
// const tomato: IVegetables = ({
//     size: 10,
//     taste: 'sour',
//     color: 'red'
// } as IVegetables)

// 2. 第二种方案: 再次声明一个同名接口 => 多个同名的接口, 默认会合并操作
// interface IVegetables {
//     size: number,
// }

// 3.第三种方案: 再次声明一个新接口, 继承原有接口
// interface ITomato extends IVegetables {
//     size: number
// }
//
// // 3) 接口是可以扩展的.
// const tomato: ITomato = ({
//     size: 10,
//     taste: 'sour',
//     color: 'red'
// })

// --------------------------------------------
// interface IVegetables { // 接口支持可选属性
//     taste: string,
//     color: string,
//     // size?: number, // ? 表示可选
//     // type?: string, // ? 表示可选
//     // 除了限制的属性, 其他的随意, 即: 自定义类型. => 任意接口
//     [key: string]: any, // 接口也可以标识任意类型,实现接口无线扩展
// }
//
// const tomato: IVegetables = ({
//     size: 10,
//     taste: 'sour',
//     color: 'red'
// })
//
// // 如果 接口中 [xxx:index]  可索引接口
// interface IArr {
//     [key: number]: any
// }
//
// let arr: IArr = [1, {}, 'a', 'v']

// --------------------------------------------------------------
// 接口可以被 类 来实现,  接口中的内容,都是抽象的, 没有具体的实现
// interface ISpeakable {
//     name: string,
//
//     // 这里的 void 标识不关心方法的返回值.
//     speak(): void // 标识: 描述类的 原型的方法
// }
//
// interface IChinese {
//     speakChinese(): void,
// }

// 一个类 可以实现多个接口
// class Speak implements ISpeakable, IChinese {
//     name!: string
//
//     speak(): void {
//     }
//
//     speakChinese(): void {
//     }
// }

// -----  抽象类 -----------------
// 类 => 抽象类, 抽象类不能被实例化
// 抽象类中, 可以包含抽象方法 和 抽象属性
// 抽象类 可以包含 非抽象的方法
// abstract class Animal { // 只有抽象类 才有抽象的属性和抽象的方法
//     abstract name: string // 抽象属性,可以没有实现, 也可以实现
//     eat() { // 有实现的方法
//     }
// }

// 抽象类的继承. 抽象类 父类一般都不会被实例化.
// class Tom extends Animal {
//     name!: string
//
// }

// 接口可以描述 对象, 函数, 类, 类的实例
class Person { // 给这个 Person 增加了一个属性
    // name:string
    constructor(public name: string) {
        this.name = name
    }
}

interface IClass { // 表示是一个构造函数类型
    new(): Person // 可以用类当成一个类型.
}

export {}
