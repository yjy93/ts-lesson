// 泛型 特性:  就是为了在声明时不能确定类型,只有在使用的时候才能决定类型

// 函数, 接口, 类型别名, 类

// 1.) 函数中使用泛型

// function createArray<T>(times: number, val: T) {
//     let result = []
//     for (let i = 0; i < times; i++) {
//         result.push(val)
//     }
//     return result
// }
//
// let r = createArray<string>(3, 'ABC') // 不传入类型, ts 也会自动推导类型

//2.) 泛型可以使用多个.
// 元组 [string,number] => [number,string]
// 交换元素位置的例子
// function swap<T, K>(tuple: [T, K]): [K, T] {
//     return [tuple[1], tuple[0]]
// }
//
// swap([1, 2])

// 函数表达式的写法
// interface IMySwap {
//     <T, K>(tuple: [T, K]): [K, T]
// }
//
// const swap1: IMySwap = <T, K>(tuple: [T, K]): [K, T] => {
//     return [tuple[1], tuple[0]]
// }
//
// const sum = <T extends number>(a: T, b: T): T => {
//     return (a + b) as T
// }
// const r1 = sum(1, 2)


// -----------------------------------------------

// 我希望 传入的数据, 只要是带有 length 属性的即可

// type WithLen = { length: number }
//
// function getType<T extends WithLen>(obj: T) {
//     obj.length
// }

// getType({length: 1})

// 默认泛型  不传递 默认给与类型
interface IDStr<T = string> {
    name: T // 可能是数组, number, boolean
}

type T1 = IDStr
type T2 = IDStr<number>
type T3 = IDStr<boolean>

let str1: T1 = {name: 'hello'}


// -------- 在 类中使用泛型 ----------

// keyof 约束属性
// 约束属性 keyof T  表示 取 T 对象里的所有 key 属性
const getVal = <T extends Object, K extends keyof T>(obj: T, key: K) => {

}
getVal({a: 1, b: 2}, 'a')

type t1 = keyof any // string number symbol
type t2 = keyof (string | number) //
type t3 = keyof string

export {}
