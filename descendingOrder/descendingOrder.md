# Descending Order
Created:  2022-05-15

[1]: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

```

&nbsp;

## Pseudo Code:
- First, we need to turn a number into an array where each element is a digit in the number
- Next, the array needs to be sorted from highest to lowest, then turned back into a string, then converted back into an int

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b - a).join(''))
}

```


&nbsp;

### Tags:
#codewars #javascript #sort #string