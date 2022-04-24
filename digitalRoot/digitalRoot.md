# Sum of Digits / Digital Root

Created:  2022-04-24

[1]: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

  16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


```
&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function digital_root(n){
    console.log(n)
    let reduced = n
    while(reduced > 9){
        reduced = reduced.toString().split('').map(e => {
        return e = Number(e)
    }).reduce((e,i) => e + i)
    }
    return reduced
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

//mathy
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript