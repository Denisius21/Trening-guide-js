//Цикл в цикле выводит в документ цифры от 1 до 9 по 3шт каждой

/*for(i = 1; i <= 9; i++){
  for(j = 1; j <= 3; j++){
    document.write(i);  
  }
}*/
//Цикл выводит строку из 10ти 'хххххххххх', если алерт вызвать 
//внутри области видимости цикла - будет выводится один 'х', потом 'xx' и так до 10
/*let str = "";
for(i = 0; i < 10; i++){
  str = str + "x";
} 
alert(str);*/
// Цикл выводит пирамидку из букв х, от 1х до 10х. 
//Так как мы прибавляем '<br>' перенос строки, пирамидка вертикальная.
/*let str = "";
for(i = 0; i < 10; i++){
  str = str + "x";
  document.write(str + '<br>');
} */
//Цикл в цикле, первая итерация первого цикла повторяется три раза j=0/j=1/j=2,
//первый write выводит цифры подряд, 000 111 222, а второй write добавляет перенос строк
/*for(i = 0; i <=9; i++){
  for(j = 0; j<=2; j++){
    document.write(i)
  }
  document.write('<br>')
}*/
//Цикл выводит в столбик значения от 1 до 9, разделяя каждый цикл новой строкой.
// второй цикл показывает нам что цифра 1-будет одна, 2-две, 3-три и т.д.
/*for(i = 1; i <=9; i++){
  for(j = 1; j<=i; j++){
    document.write(i)
  }
  document.write('<br>')
}*/
//Такой цикл записывыет в столбик значения сохраняя в строке преддыдущее значение 
// и добавляет новое.
// 1
// 122
// 122333
// 1223334444 и т.д.
/*var str = '';
for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= i; j++) {
		str = str + i;
	}
	document.write(str + '<br>');
}*/



