# Frank's Sticky Calculator

Created:  2022-04-03

[1]: https://www.codewars.com/kata/5900750cb7c6172207000054/train/javascript

## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

 Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

For instance:

50 + 12 becomes 5012
and then the operation is carried out as usual:

(5012) + 12 = 5024

Task
It is your job to create a function which takes 3 parameters:

stickyCalc(operation, val1, val2)
which works just like Frank's sticky calculator

&nbsp;

### Examples:

&nbsp;

<!-- code below -->

```javascript

stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101

```

&nbsp;

## Note:
- The calculator only works for positive integers only.

- The calculator rounds any non-integer before operating.

- The calculator rounds any output to nearest integer.



&nbsp;

## Solution:

<!-- code below -->

```javascript

function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1)
    val2 = Math.round(val2)
    joinedVals = Number('' + val1 + val2)
    if (operation === '+'){
        return Math.round(joinedVals + val2)
    }else if (operation === '-'){
        return Math.round(joinedVals - val2)
    }else if (operation === '*'){
        return Math.round(joinedVals * val2)
    }else if (operation === '/'){
        return Math.round(joinedVals / val2)
    }
}

```

&nbsp;

## Interesting Solution:

<!-- code below -->

```javascript

function stickyCalc(o, v1, v2) {
  return Math.round(eval(Math.round(v1)+''+Math.round(v2)+o+Math.round(v2)));
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript