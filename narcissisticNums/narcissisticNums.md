# Narcissistic Numbers


[1]: https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.

&nbsp;


## **Solution:**

<!-- code below -->

```javascript

function isNarcissistic(n){
    let numToArr = n.toString().split('').map(e => Number(e))
    let l = numToArr.length
    let sum = 0
    numToArr.forEach(e => {
        sum += e**l
    })
    return sum === n 
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function isNarcissistic(n) {
  return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
}

```

&nbsp;

### Tags:
#codewars #javascript