/*for(i=1; i<=9; i++){
  str = '';
  str = str + i;
  document.write(str);
}*/
/*for(i=9; i>=1; i--){
  str = '';
  str = str + i;
  document.write(str);
}*/
/*for(i=1; i<=9; i++){
  str = '-';
  str = str + i;
  document.write(str);
}*/
/*let str = '';
for(i=1; i<=20; i++){
  str = str + 'x';
  document.write(`${str}<br>`);
}*/
/*for(i=1; i<=9; i++){
  for(j=1;j<=i;j++){
    document.write(i);
  }document.write('<br>');
}*/
/*let str = '';
for(i=1; i<=10; i++){
  str = str + 'x';
  if(i % 2===0){
  document.write(`${str}<br>`)};
  continue;
}*/
/*const namberArrey = [];
let str = '';
for(i = 0; i<=10; i++){
  str = str + 'x';
  namberArrey.push(str);//Записал результат For() в массив.
}*/

 //        Задание по массивам
/*const arr1 = [1,2,3];
const arr2 = [4,5,6]; 
arr3 = arr1.concat(arr2);
/////////////////////////
const arr4 = [1,2,3,4,5];
const arr5=arr4.reverse();*/
////////////////////////

/*const arr1 = [1,2,3,4];
arr1.push(5,6,7);
arr1.unshift(8,9,10)*/
/////////////////////////

/*const arr1 = ['js', 'css', 'jq'];
alert(arr1[0]);
const name=arr1.shift();
alert(arr1[1]);
const name2 = arr1.pop();*/
///////////////////////////

/*const arr1 = [1, 2, 3, 4, 5];
const arrRes1 = arr1.slice(0,3);
const arrRes2 = arr1.slice(3);*/
///////////////////////////////

/*const arr1 = [1,2,3,4,5];
arr1.splice(1,2);*/

/*const arr1 = [1,2,3,4,5];
const resArr1 = arr1.splice(1,3);*/

/*const arr1 = [1,2,3,4,5];
arr1.splice(3,0,'a','b','c');*/

/*const arr1 = [1,2,3,4,5];
arr1.splice(1,0,'a','b');
arr1.splice(6,0,'c');
arr1.splice(8,0,'e');*/

/*const arr1 = [3, 4, 1, 2, 7];
arr1.sort();*/

/*const arr1 = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];
const arr2 = arr1.flat(Infinity);*/

/*const arr1 = [{firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male'},
{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male'},
{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female'},
{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female'}];
arr1.forEach(callback);
function callback(user){
  console.log(`${user.firstName} ${user.lastName} является ${user.gender} ей/ему сечас ${user.age}`);
}*/

/*const arr1 = [
  {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male'},
  {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male'},
  {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female'},
  {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female'}
];
const arr2 = arr1.map(mapCallback);
function mapCallback(value, index){
  const obj = {firstName: value.firstName, lastName: value.lastName, age: value.age, gender: value.gender, telephoneNumber: 08005000100 }
  return obj;
}*/

/*const arr1 = [
  {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male'},
	{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male'},
	{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female'},		
  {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female'},
  {firstName: 'Undefined', lastName: 'Undefinovich', age: 99},
  {firstName: 'Null', lastName: 'Nullovich', gender: 'male'}
];

let userTrue = 0;
function filterCallback(user){
  if(user.age >= 16 && user.gender === 'female'){
    return true;
  }
  userTrue ++
  return false;
}
const arr2 = arr1.filter(filterCallback);*/

/*function Car(manufacturer, model, color, releaseYear, speed, maxSpeed, fuelConsumption, volume){
  if(typeof manufacturer !== 'string' || typeof model !== 'string' || typeof color !== 'string' || typeof releaseYear !== 'string'){
    throw new TypeError('Enter strings');
  }
  else if(typeof speed !== 'number' || typeof maxSpeed !== 'number' || typeof fuelConsumption !== 'number' || typeof volume !== 'number'){
    throw new TypeError('Enter number');
  }
  else if(isNaN(manufacturer + model + color + releaseYear + speed + maxSpeed + fuelConsumption + volume){
    throw new Error ('Введите коректные данные')};
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
  this.fuelConsumption = fuelConsumption;
  this.volume = volume;
}
function CarPrototype(){
  this.accelerate = function(){
    if(this.speed < maxSpeed ){
      return this.speed += 10;
    }else {
      return 150;
    }
  }
  this.toBrake = function(){
    if(this.speed > 0){
      return this.speed -= 10;
    }else{
      return 0;
    }
  }
  this.stop = function(){
    return this.speed = 0;
  }
}
const carPrototype = new CarPrototype();
Car.prototype = carPrototype;

const car2 = new Car('BMW', 'i330', 'black', '2019', 0, 150, 0.08, 40);
*/

/*function summ(...num){
  number = 0;
  for(let i=0; i<num.length;i++){
    
   
    number= number + num[i];
    
  }return number;
}*/
class UserClass {
  constructor(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

getFullName=() => `${this.name} ${this.surname}`;

isAdult = () => this.age>=18;

}
const user2 = new UserClass('Vasya', 'Pupkin', 18);




class ModerClass {
  constructor(name, surname, age,email){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
  }

getFullName=() => `${this.name} ${this.surname}`;

isAdult = () => this.age>=18;

createMessage= () => `${Message}`;

deleteMessage = () => `${Delete}`;

get name() {
  return this._name;
}

set name(newName){
  if(typeof newName !== 'string'){
    throw new TypeError('Не корректные данные, должна быть строка');
  }
  this._name = newName;
}
get surname() {
  return this._surname;
}

set surname(newsurname){
  if(typeof newsurname !== 'string'){
    throw new TypeError('Не корректные данные, должна быть строка');
  }
  this._surname = newsurname;
}

}
const moder1 = new ModerClass('Petya','Petrov', 22, 'ader@new.com');



