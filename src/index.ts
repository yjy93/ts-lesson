/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-11-09 20:06:44
 * @description: 装饰器
 */

// 类装饰器
function Modifier(target: Function) { // 修饰类本身,当前参数就是类
    target.prototype.say = function () {
        console.log('say');
    }
}

// 类属性的装饰器
function toUppercase1(target: any, key: string) { // target 指的是类的原型 key指的是属性
    let value = target[key];
    Object.defineProperty(target, key, {
        get() {
            return value.toUpperCase()
        },
        set(newVal) {
            value = newVal
        }
    })
}

function double(target: any, key: string) { // 这个 target 就是类
    let value = target[key];
    Object.defineProperty(target, key, {
        get() {
            return value * 2
        },
        set(newVal) {
            value = newVal
        }
    })
}

// 原型上方法的 装饰器
function Enum(target: any, key: string, descriptor: PropertyDescriptor) {
    // descriptor: value configurable writbale enumberable
    descriptor.enumerable = false
}

// 扩展属性 和 方法
@Modifier
class Person {
    say!: Function
    @toUppercase1 // 属性装饰器
    name: string = 'Gene'
    @double // 类的静态属性装饰器
    static age: number = 10

    @Enum // 修饰原型上的方法
    getName() {
    }
}

let person = new Person();
console.log(person);
export {}
