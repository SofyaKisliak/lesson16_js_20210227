var userObj = {
    firstName: "Sofya",
    lastName: "Kisliak",
    age: 35
};
userObj.fullName = function(){
     return (userObj.firstName + ' ' + userObj.lastName);
    
}
console.log(userObj);
console.log(userObj.fullName());

function defUpperStr(str_){

    str_ = str_ ||  'Default text';    
    return str_.toUpperCase();
} 
var str = 'My text';
defUpperStr();

//console.log(defUpperStr(str));
console.log(defUpperStr());


/*function evenFn(n){
    var j = 0;
    var arr = new Array(n);
    var arr_ = new Array();

    for(var i = 0; i<n; ++i){
        
     if(i!=0 ){
         if(j<n){
            j = 2*i;
                //console.log(i,'-',arr[i] = j);
                arr[i] = j;
                arr_[i-1] = arr[i];     
         }               
     }
    }
    return arr_;//console.log( arr_.toString());  
 }  
 evenFn(10);
 console.log( evenFn(10));//console.log( evenFn(10).toString());
 console.log( evenFn(15));
 console.log( evenFn(20));*/
   //console.log('[' + evenFn(10).toString() + ']');
   //console.log('[' + evenFn(15).toString() + ']');
   //console.log('[' + evenFn(20).toString() + ']');

function evenFn(n) {
    var arr = new Array();
  
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0){
          arr.push(i);
        }  
    }
    return arr;
  }
evenFn(20);
console.log(evenFn(20));

function weekFn(n){
    var Status = '';
switch(n){
    case 1: Status = 'Понедельник'; break;
    case 2 : Status = 'Вторник'; break;
    case 3 : Status = 'Среда'; break;
    case 4 : Status = 'Четверг'; break;
    case 5 : Status = 'Пятница'; break;
    case 6 : Status = 'Суббота'; break;
    case 7 : Status = 'Воскресенье'; break;
    default: Status = null; 
}
return Status;
}
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn('hhhhhh'));


function ageClassification(n){

    var text = '';
    text = n<0?null:n<=24?'детский возраст':n<=44?'молодой возраст':n<=65?'средний возраст':n<= 75?'пожилой возраст':n<=90 ?'старческий возраст':n<=122 ?'долгожители':null;

    return text;
}
console.log(ageClassification(12));
console.log(ageClassification(122.01));

//***в браузере корректное значение, при тестировании - нет -код который закоментирован*/
/*function oddFn(n) {

    var odd = 1; 
    var arr = new Array();

    while(odd<n){
        arr.push(odd);
        odd +=2;     
    }
    return arr;//return '['+arr.toString()+']';   //return String('['+arr+']');
  }
  console.log(oddFn(10));
  console.log(oddFn(15));
  console.log(oddFn(20));*/
function oddFn(n) {
    var arr = new Array();
    var i = 0;
 
   while (i++<n) {
        if(i%2!=0){
            arr.push(i);    
        }
   }
   return arr;
 }
 oddFn(20);
 console.log( oddFn(20));

 function cbRandom(){}
 function cbPow(){}
 function cbAdd(){}
 function mainFunc(a,b,func){

    if(func && typeof func ==='function' ){ 
        return func(a,b);

    }
        return false; 
 }

 function cbRandom(a,b){
    var randomN = Math.ceil(Math.random()* (a-b)+b); 
    return randomN;
 };
 
 function cbPow(a,b){
    var powN = Math.pow(a,b)
    return powN;
 };

function cbAdd(a,b){
    var addN = (a+b);
    return addN;
 };

console.log(mainFunc(2,5,cbRandom)); 
console.log(mainFunc(2,5,cbPow));
console.log(mainFunc(2,5,cbAdd));
console.log(mainFunc(2,5,'not a func') );

 

 




 