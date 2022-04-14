# TITMultiples of 3 or 5

Created:  2022-04-14

[1]: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

code here

```

&nbsp;

## Note:
- If the number is a multiple of both 3 and 5, only count it once.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function solution(n){
    let sum = 0
    for (let i = 3; i < n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            sum += i
        }else if(i % 3 === 0){
            sum += i
        }else if (i % 5 === 0){
            sum += i
        }
    }
    return sum
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript
//more efficient
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

//great filter() example
function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript