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

const arr1 = [
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
const arr2 = arr1.filter(filterCallback);

