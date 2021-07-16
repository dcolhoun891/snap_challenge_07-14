console.log('hello world');

let name = 'Sue'
console.log(name);
age = 18;
console.log(age);


//arrays start with index number 0.
let people = [ 'Marty', 'Anais', 'Jonathan', 'Andrew'];
console.log(people);
let ages = [4, 5, 9, 2];
console.log(ages);

//objects

let person1 = {
        name: 'Anais',
        status: 'bootcamper',
        hobby: 'cooking',
        code: () => console.log('develop website')
}
console.log(person1);
console.log(person1.name, person1.status);
console.log(person1.code());



let person2 = {
    name: 'Marty',
    status: 'instructor',
    hobby: 'snow boarding',
    code: () => console.log('develop website')
}

let person3 = {
    name: 'Jonathan',
    status: 'bootcamper',
    hobby: 'bowling',
    code: () => console.log('develop website')
}

let person4 = {
    name: 'Andrew',
    status: 'bootcamper',
    hobby: 'hiking',
    code: () => console.log('develop website')
}

let bootcamp = [person1, person2, person3, person4];

console.log(bootcamp[2]);
