// Создается интерфейс (способ описания формы объекта: какие у него данные)
interface Person {
  name: string;
  age: number;
  hobbies?: string[]; // ? - опциональное поле, [] - массив строк
}

function introduce(person: Person): string { //Получает объект person соответствующий интерфейсу Person. Возвращает только строку
  let hobbiesText: string; //Объявление изначально пустой переменной, в которой будет записан результат

  if (person.hobbies) { //проверка, есть ли хобби, если да, то-
    if (person.hobbies.length > 0) {//-то, если массив не пустой(больше 0),  то-
      hobbiesText = person.hobbies.join(", ");//-то превращаем его в строку при помощи join и разделяем его ,
    } else {// в любом другом случае выходит текст "Уменя нет хобби"
      hobbiesText = "у меня нет хобби";
    }
  } else {//Если массив пустой, то выходит текст "У меня нет хобби"
    hobbiesText = "у меня нет хобби";
  }

  return `Привет, меня зовут ${person.name}, мне ${person.age} лет, мои хобби: ${hobbiesText}`;//Возвращается конечный результат, где Имя и возраст - обязательный и строгий параметр, а хобби - опциональное поле, которое состоит из массива строк, в то же время, строго строчный вариант(из за string)
}

const person1: Person = { //Пример массива, в котором есть хобби и они будут выведены через запятую
  name: "Аня",
  age: 25,
  hobbies: ["чтение", "спорт"]
};

const person2: Person = { //Пример массива, в котором нет хобби и они не будут выведены
  name: "Игорь",
  age: 30,
  // hobbies нет
};

console.log(introduce(person1));
console.log(introduce(person2)); //Вывод этих двух примеров.
//////////////////////////////////////////////////////////
interface Person {
  name: string;
  age: number;
  hobbies?: string[];
}

function introduce(person: Person): string { 
  let hobbiesText: string; 

  if (person.hobbies) { 
    if (person.hobbies.length > 0) {
      hobbiesText = person.hobbies.join(", ");
    } else {
      hobbiesText = "у меня нет хобби";
    }
  } else {
    hobbiesText = "пользователь не указал хобби";
  }

  return `Привет, меня зовут ${person.name}, мне ${person.age} лет, мои хобби: ${hobbiesText}`;
}

const person1: Person = { 
  name: "Аня",
  age: 66,
  hobbies: ["чтение", "спорт"]
};

const person2: Person = { 
  name: "Игорь",
  age: 30,
  hobbies: []
};

const person3: Person = { 
  name: 123,
  age: 25,
  // хобби нема
};

console.log(introduce(person1));
console.log(introduce(person2));
console.log(introduce(person3));
