# Find the odd int

Created:  2022-04-04

[1]: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

&nbsp;

### **Examples:** 
<!-- code below -->

```javascript

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

```



&nbsp;




## Pseudo code:
- Find the number of times each element shows up in an array
- Do by comparing 1 element at a time to each other element of array
- if that number % 2 doesn't equal zero, return that element value

&nbsp;

## **My Solution:**

<!-- code below -->

```javascript

function findOdd(a) {
    
    for (let i = 0; i < a.length; i++){
        let numOfTimes = 0
        let el1 = a[i]
        for (let j = 0; j < a.length; j++){
            let el2 = a[j]
            if (el1 == el2){
                numOfTimes += 1
            }
        }
        if (numOfTimes % 2 > 0){
            return el1
        }
    }
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript