// 1. 联合类型
// 默认你可以认为是 并集
let str: string | number; // 当没有初始化的时候, 只能调用两者中的共同方法

let ele: HTMLElement | null = document.getElementById('#app');
ele!.style.color = 'red'; // !非空断言

// 可以做断言操作, 也能解决这个问题.
(ele as HTMLElement).style.color = 'red'; // as 类型断言 强制转换

// 双重断言 (这种方式不建议使用,会破坏原有类型).
(ele as any) as boolean;

// 字面量类型
type Direction = 'up' | 'down' | 'left' | 'right'
let direction: Direction;
direction = 'up'

export {}
