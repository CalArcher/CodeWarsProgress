# Find the Party Outlier

[1]: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

## [Kata link][1]

&nbsp;

## Question

---

&nbsp;

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

&nbsp;

### **Example:**

<!-- code below -->

```javascript

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

```

<br/>

## **Solution:**

<!-- code below -->

```javascript
function findOutlier(integers) {
  let even = []
  let odd = []
  let last = integers[0]
  for (let i = 0; i < integers.length; i++) {
    //determines if current element is even or odd
    if (integers[i] % 2 === 0) {
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }
    //checks whether odd or even outlier has been found
    if (even.length > 0 && odd.length > 0) {
      let oddOneOut = determineLength(even, odd)
      if (oddOneOut != undefined) {
        return oddOneOut
      }
    }
  }
}

//helper function, decides if even or odd array is outlier
function determineLength(e, o) {
  if (e.length > o.length) {
    return o[0]
  } else if (o.length > e.length) {
    return e[0]
  }
}
```

&nbsp;

### Tags:

#codewars #javascript
