// 1)Создайте класс Person со свойствами firstName, lastName и age. Добавьте статическое свойство oldestPerson, которое хранит самый старый экземпляр Person, созданный на данный момент. Добавьте статический метод compareAge, который принимает два экземпляра Person и возвращает разницу в их возрасте.

class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    if(!Person.oldestPerson || age > Person.oldestPerson.age){
      Person.oldestPerson = this;
    }
  }
  static compareAge(person1, person2) {
    return person1.age - person2.age;
  }
}
const person_1 = new Person("Ivan", "Pokhilchenko", 24);
const person_2 = new Person("Andrey", "Andreev", 30);

console.log(Person.oldestPerson);
console.log(Person.compareAge(person_1,person_2));
//___________________________________________________________________
// 2)Создайте класс Book со свойствами title, author и yearPublished. Добавьте статическое свойство, где будут сохранены все экземпляры Book.  Добавьте статический метод listAuthors, который возвращает массив со  всеми именами авторов.

class Book {
  static allBooks =[];
  constructor(title, author, yearPublished){
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    Book.allBooks.push(this);
  }
  static listAuthors(){
    const nameAuthors = [];
    Book.allBooks.forEach((book) => {
      nameAuthors.push(book.author);
    });
    return nameAuthors;
  }
}
const book_1 = new Book("JavaScript", "Дэвид Флэнаган", 2008);
const book_2 = new Book("HTML5.Карманный справочник", "Аженнифер Роббинс", 2015);
const book_3 = new Book("Новая большая книга CSS", "Дэвид Макфарланд", 2016);

console.log(Book.allBooks);
console.log(Book.listAuthors());
