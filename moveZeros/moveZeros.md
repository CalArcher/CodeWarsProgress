# Moving Zeros To The End


Created:  2022-04-19

[1]: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function moveZeros(arr){
    let s = arr.filter(el => el !== 0)
    let diff = arr.length - s.length
    for (let i = 0; i < diff; i++){
        s.push(0)
    }
    return s
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript
var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}
//----------

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
//----------

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}
```

&nbsp;

### Tags:
#codewars #100Devs #javascript