// # 1

describe ('Условные операторы :', () => {

    
    describe('sumOrMultiply', function() {
        it ('sholuld be defined', function(){
            assert.isDefined(sumOrMultiply);
        })
    
        it ('sholud return sum ( 5, 5)', function() {
            const firstNum = 5;
            const secondNum = 5;
            const expected = 10;
    
            const actual = sumOrMultiply(firstNum, secondNum);
    
            assert.deepEqual(actual, expected);
        })
    
        it ('should return product (4, 7)', function () {
            const firstNum = 4;
            const secondNum = 7;
            const expected = 28;
    
            const actual = sumOrMultiply(firstNum, secondNum);
    
            assert.deepEqual(actual, expected);
        })
    
        it ('should return product (0, 7)', function () {
            const firstNum = 0;
            const secondNum = 7;
            const expected = 0;
    
            const actual = sumOrMultiply(firstNum, secondNum);
    
            assert.deepEqual(actual, expected);
    
        })
    
        it ('should return product (undefined, undefined)', function () {
            const firstNum = undefined;
            const secondNum =   undefined;
            const expected = 'Please input right date';
    
            const actual = sumOrMultiply(firstNum, secondNum);
    
            assert.deepEqual(actual, expected);
    
        })
    });

        //# 10

    describe ('defineWeekDay', () => {
        it('should be defined', () => {
            assert.isDefined(defineWeekDay);
        });
    
        it('it should return \' \' (0)', () => {
            const number = 0;
            const expected  = ' ';
             
            const actual = defineWeekDay(number);
    
            assert.deepEqual(actual, expected);
    
        })
    
        it('should return  \' \' (undefined)', () => {
            const number = undefined;
            const expected  = ' ';
             
            const actual = defineWeekDay(number);
    
            assert.deepEqual(actual,  expected);
    
        })
    
        it('it should return Monday (1)', () => {
            const number = 1;
            const expected  = 'Monday';
             
            const actual = defineWeekDay(number);
    
            assert.deepEqual(actual,  expected);
    
        })
    
        it('it should return Sunday (7)', () => {
            const number = 7;
            const expected  = 'Sunday';
              
            const actual = defineWeekDay(number);
    
            assert.deepEqual(actual,  expected);
        })

    });
    
    //# 2
    
    describe ('define kordinats (x, y)', () => {
        it('it should be defined', () => {
            assert.isDefined(kordinat);
        })
    
        it('дольжен вернуть undefined', () => {
            const x = undefined;
            const y = undefined;
            
            const expected = 'дольжен вернут undefined';
    
            const actual = kordinat(x, y);
    
            assert.deepEqual(actual, expected);
        })
    
        it('дольжен вернут Null', () => {
            const x = null;
            const y = null;
            const expected = 'please enter number';
    
            const actual = kordinat(x, y);
    
            assert.deepEqual(actual, expected);
        })      
    
        it('точка находится в начале координат', () => {
            const x = 0;
            const y = 0;
            const expected = 'точка находится в начале координат';
    
            const actual = kordinat(x, y);
    
            assert.deepEqual(actual, expected);
        })
    
        it('точка находится в первой четверти', () => {
            const x = 3;
            const y = 7;
            const expected = "точка находится в первой четверти";
    
            const actual = kordinat(x, y);
    
            assert.deepEqual(actual, expected);
        })
    
        it('точка находится во второй четверти', () => {
            const x = -3;
            const y = 7;
            const expected = 'точка находится во второй четверти';
    
            const actual = kordinat(x, y);
    
            assert.deepEqual(actual, expected);
        })
    
        it('точка находится в третьей четверти', () => {
            const x = -3;
            const y = -7;
            const expected = 'точка находится в третьей четверти';
    
            const actual = kordinat(x, y);
    
            assert.deepEqual(actual, expected);
        })
    
        it('точка находится в четвертой четверти', () => {
            const x = 3;
            const y = -7;
            const expected = 'точка находится в четвертой четверти';
    
            const actual = kordinat(x, y);
    
            assert.deepEqual(actual, expected);
        }) 
    
    });
    
    //# 3
    
    describe ('getSumOfPozitive(a, b, c)', () => {
        it('it should be defined', () => {
            assert.isDefined(getSumOfPozitive);
        })
    
        it(' a = undefined, b = undefined, c = undefined,  введите число', () => {
            const a = undefined;
            const b = undefined;
            const c = undefined;
            const expected = 'введите число';
    
            const actual = getSumOfPozitive( a, b, c ); 
    
            assert.deepEqual(actual, expected);
        })
    
        it('a = null, b = null, c = null,  введите число', () => {
            const a = null;
            const b = null;
            const c = null;
            const expected = 'введите число';
    
            const actual = getSumOfPozitive( a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
        it( '(a = " ", b = " ", c = " "),  введите число', () => {
            const a = ' ';
            const b = ' ';
            const c = ' ';
    
            const expected = 'введите число';
    
            const actual = getSumOfPozitive( a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
        it( '(a = [ ], b = [ ], c = [ ]),  введите число', () => {
            const a = [ ];
            const b = [ ];
            const c = [ ];
    
            const expected = 'введите число';
    
            const actual = getSumOfPozitive( a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
        it(' a > 0, b > 0, c > 0  найти сумму a + b + c', () => {
            const a = 2;
            const b = 4;
            const c = 6;
            const expected = 12;
    
            const actual = getSumOfPozitive( a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
        it('a < 0, b < 0, c < 0 найти сумму a + b + c', () => {
            const a = -9;
            const b = 2;
            const c = -6;
    
            const expected = -13;
            const actual = getSumOfPozitive( a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
    });
    
    //# 4 
    
    describe ('findMaxMultiple(a, b, c)', () => {
        it('it should be defined', () => {
            assert.isDefined(findMaxMultiple);
        })
    
        it('дольжен вернут undefined', () => {
            const a = undefined;
            const b = undefined;
            const c = undefined;
            const expected = 'введите число';
    
            const actual = findMaxMultiple(a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
        it('дольжен вернут  \" \" ', () => {
            const a = ' ';
            const b = ' ';
            const c = ' ';
            const expected = 'введите число';
    
            const actual = findMaxMultiple(a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
        it('дольжен вернут  [ ]', () => {
            const a = [];
            const b = [];
            const c = [];
            const expected = 'введите число';
    
            const actual = findMaxMultiple(a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
    
        it('дольжен вернут сумму (a, b, c) + 3', () => {
            const a = 1;
            const b = 1;
            const c = 1;
            const expected = 6;
    
            const actual = findMaxMultiple(a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
        it('дольжен вернут умнажение (a, b, c) + 3', ()=> {
            const a = 2;
            const b = 4;
            const c = 6;
            const expected = 51;
    
            const actual = findMaxMultiple(a, b, c);
    
            assert.deepEqual(actual, expected);
        })
    
    });
    
    
    //# 5

    describe ('findStuden (n)', () => {
        it('it should be defined', () => {
            assert.isDefined(findStudent)
        })
    
        it('it should be undefined (n = undifined)', () => {
            const n = undefined;
            const expected = 'введите число';
    
            const actual = findStudent(n);
    
            assert.deepEqual (actual, expected);
        })
    
        it ('it should return null (n = Null)', () => {
            const n = null;
            const expected = 'введите число';
    
            const actual = findStudent(n);
    
            assert.deepEqual (actual, expected);
        })
    
        it('it should return empty array ( n = [ ] )', () => {
            const n = [ ];
            const expected = 'введите число';
    
            const actual = findStudent(n);
    
            assert.deepEqual(actual, expected);
        })

        it('it should return \' B \'', () => {
            const n = 80;
            const expected = 'B';
            
            const actual = findStudent(n);

            assert.deepEqual(actual, expected);
        })

        it('it should return \'F\'', () => {
            const n = 12;
            const expected = 'F';

            const actual = findStudent(n);

            assert.deepEqual(actual, expected);
        })

    });

});

//# 1

describe('Циклы :', () => {
    describe('oddNumbers', () => {
        it('it should be defined', () => {
            assert.isDefined(oddNumbers);
        })

        it('it should be Undifined', () => {
            const sum = undefined;
            const quan = undefined;
            const expected = " ";

            const actual = oddNumbers();

            assert.deepEqual(actual, expected);
        })

        it('it should be Null', () => {
            const sum = 0;
            const quan = 0;
            const expected = " ";

            const actual = oddNumbers();

            assert.deepEqual(actual, expected);
        })

        it('it should be Array []', () => {
            const sum = [];
            const quan = [];
            const expected = " ";
        })
         

        

    });

    describe('simpleElement', () => {
        it(' it should defined', () => {
            assert.isDefined(simpleElement);
        })

        it('it should be Undefined', () => {
            const n = undefined;
            const expected = " ";

            const actual = (simpleElement (n));
            assert.deepEqual(actual, expected);
        })

        it('it should be Null', () => {
            const n = 0;
            const expected = " ";

            const actual = (simpleElement (n));
            assert.deepEqual(actual, expected);
        })

        it('it should be simple element (9)', () => {
            const n = 9;
            const expected = `simple`

            const actual = (simpleElement (n));
            assert.deepEqual(actual, expected);
        })

        it('it should be simple element (10)', () => {
            const n = 10;
            const expected = `storng`

            const actual = (simpleElement (n));
            assert.deepEqual(actual, expected);
        })

    });

});

describe('Массивы :', () => {
    describe('findMinElement(arr)', () => {
        it('it should define', () => {
            assert.isDefined(findMinElement);
        })
        it('it should return Undefined', () => {
            const arr = undefined;
            const expected = [ ];

            const actual = (findMinElement(arr));
            assert.deepEqual(actual, expected);
        })
    });


} );