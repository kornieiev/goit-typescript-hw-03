class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
    console.log(this.signature);
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: true | false;
  key: Key;
  tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }
  abstract openDoor(key: Key): void;
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("можна заходити");
    } else {
      console.log("не можна заходити");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("вірний ключ! двері відчинені!");
    } else {
      this.door = false;
      console.log("не вірний ключ! двері зачинені!");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
console.log("house", house);
const person = new Person(key);
console.log("person", person);

house.openDoor(person.getKey());

house.comeIn(person);

export { Key };
