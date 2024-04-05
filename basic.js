class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    sayHello() {
        console.log(`안녕하세요, ${this.name}입니다`)
    }
}

const person1 = new Person("Park", 25)
console.log(person1.name)
person1.sayHello()


const person2 = new Person("LEE", 29)
console.log(person2.name)
person2.sayHello()


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}이(가) 소리를 냅니다.`)
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }

    // speak() {
    //     console.log(`${this.name}이(가) 멍멍 짖습니다.`)
    // }

    bark() {
        console.log(`멍멍`)
    }

    fetch() {
        console.log(`${this.name}이(가) 공을 가져옵니다.`)
    }
}

const dog1 = new Dog("백구", 3)

dog1.bark()
dog1.speak()