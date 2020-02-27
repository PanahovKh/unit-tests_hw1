function sumOrMultiply(firstNum, secondNum){

    if ( (firstNum !== 0 && !firstNum || (secondNum !== 0) && !secondNum) ) {
        return 'Please input right date';
    } 

    return firstNum %2 === 0? firstNum * secondNum : firstNum + secondNum;
}

//#1

function getSum(a, b) {
    let result = 0;

    if ((a % 2 ) === 0) {
        result = a * b;
    } else {
        result = a + b;
}
    return result; 
}
console.log(getSum(2, 5))

////#2

function kordinat(x, y) {
    let s = "";

 
    if(x > 0 && y > 0) {
        s="точка находится в первой четверти"; 
    }
    if(x < 0 && y > 0) {
        s="точка находится во второй четверти";
    }
    if (x < 0 && y < 0) {
        s="точка находится в третьей четверти";
    }
    if(x > 0 && y < 0) {
        s="точка находится в четвертой четверти";
    }
    if(x === 0 && y === 0) {
        s="точка находится в начале координат"
    }
    if(x === undefined && y === undefined) {
        s="дольжен вернут undefined"
    }
    if(x === null && y === null) {
        s="please enter number"
    }
    if(x === [] && y === []) {
        s="please enter number"
    }
 
 
    return s;
}

console.log(kordinat(4, -7))

//#3 

function getSumOfPozitive(a, b, c) {
    let result = 0;

    if( (typeof a) !== 'number' || (typeof b) !=='number' ||(typeof c) !=='number') {
        return 'введите число';
    } else if ( a < 0 || b < 0 || c < 0 ) {
        return (a + b + c);
    }else {
        if(a > 0) {
            result += a;
        }
        if(b > 0) {
            result += b;
        }
        if(c > 0) {
            result += c;
        }
    }
    
      return result;
}

console.log('summa polajitelnix ', getSumOfPozitive(2, 4, 6));


//#4


function findMaxMultiple(a, b, c) {
    
    if( (typeof a) !=='number' || (typeof b) !=='number' || (typeof c) !=='number') {
        return 'введите число'
    }

    let multi = a * b * c;
    let sum = a + b + c;
    let result = 0;

    if (multi > sum) {
        result = multi + 3;
    } else {
        result = sum + 3;
    }
    return result;
}
console.log(findMaxMultiple(2, 4, 6));

//#5

function findStudent (n){
    if((typeof n) !== 'number') {
        return 'введите число'
    }
    if(n < 0 || n <= 19) {
        result = "F";
    } else if (n >= 20 && n <= 39) {
        result = "E";
    } else if (n >= 40 && n <= 59) {
        result = "D";
    } else if (n >= 60 && n <= 74) {
        result = "C";
    } else if (n >= 75 && n <= 89) {
        result = "B";
    } else if (n >= 90 && n <= 100) {
        result = "A";
    }

    return result;
}
console.log (findStudent(45));


//#Цыклы #1

function oddNumbers (i) {
    let sum = 0;
    let quan = 0;
    let result = ' ';   

    if (!i) return result;
        
    
    for (let i = 2; i < 99; i += 2) {
        sum  += i;
        quan ++;
    }
return `Summery is ${sum}, Quantiity ${quan}`;
}
console.log(oddNumbers());

//#2

function simpleElement (n) {

    let result = ' ';   

    if (!n) return result;

    for (let i = 2; i < n; i++) {

        if (n % i !== 0) {
            return (`simple`)  
        } else {
            return (`storng`)
        } 
    }
     
}
console.log(simpleElement(9));

//#3


//#4


//#5


//#6


// массивы #1

function findMinElement(arr) {
    let min = arr[0];
    let result = [ ];

    if(typeof(arr) !==[] ) return result;
   else if(typeof(arr) !=='number' ) return result;

    for( let i = 1; i < arr.length; i++ ) {
        if( arr[i] < min ) {
            min = arr[i];
        } 
    }

    return min;
}
console.log(findMinElement([4, 6, 9, 3, 0]));

//#2


function findMaxElement(arr) {
    let max = arr[0];

    for( let i = 1; i < arr.length; i++ ) {
        if( arr[i] > max ) {
            max = arr[i];
        } 
    }

    return max;
}
console.log(findMaxElement([4, 6, 9, 3, 0]));

//#3

function findMinArray(arr) {
    let min = arr[0];
    let minIndex = 0;

    for( let i = 1; i < arr.length; i++ ) {
        if( arr[i] < min ) {
            min = arr[i];
            minIndex = i;
        } 
    }

    return minIndex;
}
console.log(findMinArray([4, 6, 9, 3, 5, 0, 1]));

//#4

function findMaxArray(arr) {
    let max = arr[0];
    let maxIndex = 0;

    for( let i = 1; i < arr.length; i++ ) {
        if( arr[i] > max ) {
            max = arr[i];
            maxIndex = i;
        } 
    }

    return maxIndex;
}
console.log(findMaxArray([4, 6, 9, 3, 5, 0, 1]));

//#5

function findSumOddNumbers(arr) {
    let sum = 0;

    for( let i = 0; i < arr.length; i++ ) {
        if( i % 2 !== 0) {
            sum  = sum + arr[i];
        }
    }
    return sum;
}
console.log(findSumOddNumbers([4, 6, 9, 3, 5, 0, 1]));

//#6 

function findReversArrays(arr) {
    let revers = 0;

    for( let i = arr.length - 1; i >= 0; i--) {
        
    }
}
console.log(findReversArrays([1, 2, 3, 4]));



//#7

function findQuantOddNumbers(arr) {
    let quan = 0;

    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] % 2 !== 0) {
            quan = quan + 1;
        }
    }
    return quan;
}
console.log(findQuantOddNumbers([4, 6, 9, 3, 5, 0, 1]));


//# 10
function defineWeekDay(number)  {
    const weekDays = ['Monday','Tuesday', 'Wednsday', 'Thursday', 'Friday','Saturday', 'Sunday'];
    let result = ' ';   

    if (!number) return result;

    for(let i = 0; i < weekDays.length; i++) {
        if( (number - 1) === i) {
            result = weekDays[i]
        }
    }

    return result;
};

console.log(defineWeekDay(5));
