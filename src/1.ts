/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

class Student {
  // public name: string; // це видаляємо.
  // public age: number; // це видаляємо.
  // public grade: string; // це видаляємо.

  // тут додаємо модифікатор доступу, наприклад, public

  constructor(public name: string, public age: number, public grade: string) {
    // this.name = name; // це видаляємо.
    // this.age = age; // це видаляємо.
    // this.grade = grade; // це видаляємо.
  }
}

export { Student };

// public. Це модифікатор за замовчуванням. Публічні властивості та методи доступні звідусіль, як всередині, так і поза класом.

// private. Приватні властивості та методи доступні лише всередині класу, в якому вони визначені. Вони не доступні за межами цього класу та не наслідуються його нащадками.

// protected. Схоже на private, де захищені властивості та методи наслідуються.

// readonly. Схоже на const, але в контексті властивості класу. Після ініціалізації властивості її значення не можна змінити

// static. Дозволяють додати поведінку чи дані, які пов'язані з самим класом, а не з його окремими екземплярами
