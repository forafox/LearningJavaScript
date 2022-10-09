function isEven(a){
 if(a==1) return false;
 else if(a==0) return true;
 else if(a<0) return isEven(-a);
 else return isEven(a=a-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
/*
true
false
false
Написать рекурсию для проверки честности числа, учитывая два условия. 1-нечетная
0-четная
четность проверяетя через n=n-2
*/
