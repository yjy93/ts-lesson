// 类型推断

// 1. 当赋值时,会推断

let str = ''; // 不赋值, 会是 any 类型, 赋了值, 会根据值进行类型推断

// 2. 函数默认会进行推断 函数会根据 右边的赋值, 推导左边的类型

// 3. 返回值 也会自行推断
// 不用特意标注类型, 会进行推断
const sum = (a: string, b: string): string => {
    return a + b
}

// 4. 属性推断
let school = { // 需要限制的话,必须要添加 类型.
    name: 'Gene',
    age: 11
}
let {name, age} = school // 对象解构, 取出属性会自动进行类型推导.

interface ISchool { // 通过索引访问操作符, 获取类型中的类型 [] 访问
    name: string,
    age: number,
    address: {
        n: string
    }
}

// -- 接口中取 属性, 只能用 [] 方括号
type n = ISchool['address']['n']

// 5. 类型的反推  typeof 获取对象的类型
type MySchool = typeof school


// extends keyof typeof 常用关键字.


// ---- 类型保护 ------

export {}
