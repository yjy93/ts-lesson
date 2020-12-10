// 声明函数的两种方式
// 1. 函数声明 function
// 2. 函数表达式方式 声明函数 const fn =

// 声明不赋值 就是 any 类型

// ----------------------------------------------------------
// 1. 函数声明的方式 声明函数 和 标识.
function sum(a: string, b: string): string {
    return a + b;
}

// -----------------------------------------------------------
// 2. 函数表达式方式声明函数 和 标识
// 如果使用的是表达式, 你给他定义了类型, 你可以把一个可以兼容的函数赋值给他
type Sum = (a: string, b: string) => string
let sum2: Sum = (a: string, b: string): string => {
    return a + b
};

// 可选参数 ? 默认值 =
// b? 表示 b 可以不传值,是个可选参数
let sum3 = (a: string, b?: string) => {

};
let sum4 = (a: string, b: string = 'Gene') => {

};

// 剩余参数
let sum5 = (...args: number[]) => {
};
sum5(1, 2, 3, 4)

// 函数的重载
// 比如: 我希望把一个字符串 或者 数字转换成一个数组
// 123 =>[1,2,3];
// '123' => ['1','2','3']

/** --------------------- 函数的重载 ------------------------------ */
// 函数的重载
function toArray(value: number): number[]
function toArray(value: string): string[]

// 这种方式, 我们没办法规定,返回的是 number类型的数组还是 string类型的数组
function toArray(value: number | string): number[] | string[] {
    if (typeof value == "string") {
        return value.split('')
    } else {
        return value.toString().split('').map(item => parseInt(item))
    }
}

export {}
