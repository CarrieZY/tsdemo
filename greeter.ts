console.log('你好ts')

function Getdata(){

}

var str:string='你好ts'
console.log(str)
// typescript中的数据类型 主要有：布尔类型 数字类型 字符串类型 数组类型   元组类型 枚举类型 任意类型 null和undefined void类型 never类型
// 布尔类型
var show:boolean=true
show=false
// 数字类型
var a:Number=24354
a=4124
//字符串类型
var str:string='545'
str='5212542'
//数组类型 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
var Arr:number[]=[2131,54646,3213];//表示数据里面的全部原生都应该是number类型 
// 第二种方式是使用数组泛型，Array<元素类型>：
var Arrar:Array<number>=[321341354,5454,34354];//表示Array类型里的每一个都是number类型
//元组类型  属于数组的类型   数组里面的类型可以是字符串  也可以是number类型
let x: [string, number];//可以给数组中每一个数，指定一个类型
x=['244124',242]

// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {Red, Green, Blue}
let c:Color=Color.Green;
console.log(c) //1  打印color.green对应的标识符
// 如果标识符没有赋值   标识符就是下标  如果将Green=3  则打印出来是3

// 任意类型 any 
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// 任意类型的用处  用到object的类型的时候  可以指定any
let obj:any=document.getElementById('div')
obj.style.color='red'
// Null 和 Undefined 用处不大  之前的是变量定义了没有赋值就是undefined   在typescript中会报错
var num:number|undefined 
console.log(num);//这样写才能不报错
let u: undefined = undefined;
let n: null = null;
console.log(u)
console.log(n)//null   
// 一个元素可能是null   可能是undefined  可能number类型
var unm2:number |null |undefined;
unm2=2121  //num2变成了number

// Never类型（其他类型） never类型表示的是那些永不存在的值的类型  方法没有返回值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}


// typescript中的函数的定义 
// 声明式函数

function run():string{
    return '4242'
}//函数返回的数据一定是一个字符类型

//匿名函数
let run2=function():string{
    return '1424'
}
// ts中定义方法传参
function getInfo(name:string,age:number):string{
    // 参数限制类型  返回的是字符串类型
    return `${name}2123313${age}`
}
getInfo('zgangds',212)


let getInfo2=function(name:string,age:number):string{
    return  `${name}++${age}`
}
getInfo2('zgangds',212)

// 没有返回值的方法

function resv():void{
    console.log('run')
}
// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：
// 就是在变量后面加上问号  这个参数就是可传和不可传的
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
let result3 = buildName("Bob", "Adams");  // ah, just right
// 默认参数就是将默认的参数后面firstName: string='2121',如果不传就会默认这个值 如果传了就会变成传入的值

// 利用es6的扩展运算符 表示数组接收传入的剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
  let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");

//   函数重载 通过为一个函数提供多个函数类型定义多种功能的母的
// 同名函数 传递不同参数
// es5中出现重名的函数  会将下面的函数替换上面的函数
// 上边是声明
function add (arg1: string, arg2: string): string
function add (arg1: number, arg2: number): number
// 因为我们在下边有具体函数的实现，所以这里并不需要添加 declare 关键字

// 下边是实现
function add (arg1: string | number, arg2: string | number) {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return arg1 + arg2
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1 + arg2
  }
}

// 函数中this的指向
// this指向上下文


// 类的使用
class Greeter {
    greeting: string;//greeting 是这个类里面的成员  你要引用的话  就得this.类成员
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
// 最后一行，我们使用 new构造了 Greeter类的一个实例。 它会调用之前定义的构造函数，创建一个 Greeter类型的新对象，并执行构造函数初始化它。

// dog是子类 继承了父类里面的方法  可以通过dag来继承dag父类Animal里面的方法
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
// dog继承了Animal里面的方法   Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();//继承dog构造函数里面的bark()方法
dog.move(10);//继承dog构造函数里面继承的move()方法
dog.bark();//继承dog构造函数里面的方法