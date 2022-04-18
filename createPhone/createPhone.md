# Create Phone Number

Created:  2022-04-18

[1]: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


```

&nbsp;

## Note:
- The returned format must be correct in order to complete this challenge.
- Don't forget the space after the closing parentheses!

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function createPhoneNumber(n){
    n = ['(', n[0], n[1], n[2], ')', ' ', n[3], n[4], n[5], '-', n[6], n[7], n[8], n[9]]
    return n.join('')
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript