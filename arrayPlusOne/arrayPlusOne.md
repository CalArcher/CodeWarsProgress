# +1 Array

Created:  2022-04-05

[1]: https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

```

&nbsp;

## Note:

Code Wars defaulted to Node v8.3.1, resulting in my code not being accepted. Once switching to Node v10.x, my solution worked.

&nbsp;




## Comment:

BigInt() is required as the array length can exceed the max safe integer. 

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function upArray(arr){
    let nullCount = 0
    if (arr.length == 0){
        nullCount += 1
    }
    arr.forEach(x => {
        if (x < 0 || x.toString().length != 1){
            nullCount += 1
        }
    })
    if(nullCount > 0){
        return null
    }else{
    let toStrAddOne = Array.from((BigInt(arr.join('')) + 1n).toString())
    toStrAddOne = toStrAddOne.map((num) => {
        return Number(num)
    })
    return toStrAddOne
    }
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

const BigNumber = require('bignumber.js');

const upArray = arr =>
  arr.length === 0 || arr.filter(x => x < 0 || x > 9).length > 0
    ? null
    : (new BigNumber(arr.join('')).plus(1))
        .toPrecision()
        .split('')
        .map(Number);

//note .plus() method, added to anki

```

&nbsp;

### Tags:
#codewars #100Devs #javascript