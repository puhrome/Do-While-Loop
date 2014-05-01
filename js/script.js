/**
 * Do While Loop Created by Phirom Yim on 5/1/14.

var b = 10;//sets up the index

while (b > 0){//checks the condition
    console.log(b + " kegs on the wall");//concatenate it and then run code
    b--; // that is to break the infinite cycle (--) decrements or (++) increments index
}*/

//Do While Loop isn't common but must be aware when it is used
var c = 10;

do {//do or run this code inside here
    console.log(c + ' kegs on the wall');//code will still run before condition is true
    c--;//decrement it
}
while (c > 0);//while or as long as our condition is true