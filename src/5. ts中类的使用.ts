/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-11-08 22:25:24
 * @description: 类 ES6 类
 */

// as 断言成 XXX类型
// ! 非空断言
// ? 链式判断运算符  有值取值, 没有值 返回 undefined

// ES6 类:=> 静态属性  私有的实例属性  共享的原型属性
class Pointer {
    x!: number; // 表示实例上有这个属性 非空断言
    y!: number; // 非空断言

    constructor(x: number, y?: number, ...args: number[]) { // 这些参数, 函数中的使用方式,这里都可以使用.
        this.x = x;
        this.y = y as number;
    }
}

let pointer = new Pointer(1, 2, 3, 4, 5, 6);
console.log(pointer.x);

// --------------------------------------------------------------------
// public 表示 父类本身 子类, 外部 都可以获取这个属性
// protected 受保护的, 父类可以访问到, 子类可以访问到, 但是外部不能访问
// private 只有自己能够访问到该属性
// 如果 constructor 被标识成了 private 或者 protected, 则此类不能被new,
// 被标识成了private, 则不能被子类继承
class Animal {
    public name!: string;
    public age!: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 静态属性 和 静态方法 通过类来调用就是动态的
    static type = "动物";

    static getName() {
        return "动物类"
    }
}

class Cat extends Animal {
    address = '';

    constructor(name: string, age: number, address: string) {
        super(name, age);
        this.address = address
    }

    // 静态方法
    static getName() { // 子类重写 父类的方法
        return "猫"
    }

    // 属性访问器. 来访问私有属性
    private _eat: string = ''
    get eat() { // 原型属性
        return this._eat
    }

    // 属性访问器.
    set eat(newVal) {
        this._eat = newVal
    }
}

let tom = new Cat('miao', 10, '北京');
console.log(Cat.getName())
export {}
