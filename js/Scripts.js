//String - стока
//Number - числа
//Boolean - True/False логические значения
//undefined - значение не установлено
//null - не определеное значение

//todo Числвые значения
var x = 45;
alert(typeof x);
var y = 23.867;
document.write("x = "+x+" | "+"y = "+y);
// console.log("x = "+x+" | "+"y = "+y);
// alert("x = "+x+" | "+"y = "+y);

//todo Строки
var Company = "Microsoft company";
var Company2 = 'Microsoft\'s company';
alert(typeof Company);
var Company3 = Company+" FD18" + "Blum";
document.write(Company3);

//todo Boolean
var isAlive = true;
var isDead = false;

if(isAlive == null)
    document.write("I live in Krivoy Rog");
if(isDead == true)
    document.write('I don\'t live in Krivoy Rog');

//todo Null, Undegined
var number1;
alert(number1);

var number2 = null;
alert(number2);

//todo Слабая тепизация
var xNumber; //undefined
xNumber = 45; //Number
xNumber = "../images/picture.png";
xNumber2 = xNumber + 266; //../images/picture.png266

//todo Операции над переменными
//+
var x = 10;
var y = x+50;
// alert(y);

//-
var x = 100;
var y = x -50;
// alert(y);

//*, /
var x = 40;
var y = 5;
// alert(x*y);
// alert(x/y);

//%-деление по модулю
var x = 40;
var y = 7;
var z = x%y;
// alert(z); //5

//Инкремент,Декремент
var x = 5;
// x = x+1;
x++; //x = 6
++x; //x = 7

var z = ++x;
// alert(z); // z=8
z = x++;
z=x;
// alert(z); // z=9

//Присвоение
// =
var x = 25;

// +=
// x = x + 25; //50
x+=25;

// -=
// x = x - 25;
x-= 25;

// *=
// x = x * 3; //75
x *= 3;

// /=
// x = x / 3; //75
x /= 3;

//Операторы сравнения
// ==
alert(isAlive == isAlive);
alert(5 == 7);//false
alert(5 == 5); //true
alert(5 == "5"); //true
alert(5 ==="5"); //false

// !=
alert(5 != 7);//true
alert(5 != 5); //false
alert(5 != "5"); //false
alert(5 !=="5"); //true

//<,>,<=,>=
alert(5 > 7);//false
alert(5 < 5); //false
alert(5 <= "5"); //true
alert(5 >= "5"); //true

//Логичиские операторы
// &&
alert(5<7 && 7 == 7); //true
alert(5<7 && 7 == 8); //false

// ||
alert(5<7 || 7 == 8); //true

// !

alert(!isDead && 7==7); //true
alert(!isDead && !(7==7));//false

//Преобразование
var Name = prompt("What is your Name : ");
alert("Hello "+ Name);

var number1 = "46";
var number2 = "4";
var result = parseInt(number1) + parseInt(number2);
var resul2 = parseInt(prompt("How matht this clock?"));

//Float, Double
var number2 = parseFloat("14.987");

var number3 = "123sdfdsf"
var number4 = parseInt(number3);
alert(number4); //123

number3 = "df34helo87";
number4 = parseInt(number3);
alert(number4); //NaN
alert(isNaN(number4));

//if(условие) действие;
if(number3 == "df34helo87"){
    var text = "Они равны";
    alert(text);
}

//if else
var isOk = confirm("sdfdf");
if(isOk){
    var text = "Они равны";
    alert(text);
}
else{
    alert("Oни не равны");
}

//if elseIf else
var Sex = prompt("Hwo is hwo?")
if(Sex == "Male"){
    alert("false");
}
else if(Sex == "Woman"){
    alert("true");
}
else{
    alert("Infinity");
}

//Swith
//while, do While , for











