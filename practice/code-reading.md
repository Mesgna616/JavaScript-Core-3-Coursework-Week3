# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers. Line 4 the variable X is only accessible inside the block, thus the result is 2 while line 6 x variable take the global variable from line 1

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
he output of the first console.log(x) is 10 because it reads the value of the global variable (x).
// The console.log(y) throws a reference error of not defined because the variable y, is a local variable which exist only inside the function f1().
// The console.log(f1()) is undefined because there's no value.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
The out put will be 9 and 10 because the first is constant so the value is not changing but on the second one the value has changed and the function has been called. 
