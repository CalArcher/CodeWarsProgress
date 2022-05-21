# Find the Missing Number

Created:  2022-05-21

[1]: https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

code here ------->

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function missingNo(n){
    n = n.sort((a,b) => a - b)
    for (let i = 0; i <= n.length; i++){
        if(n[i] != i){
            return i 
        }
    }
}

//Time complexity is 2 + n.length, space complexity is linear 

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

//very smart and very simple. 5050 is the sum of all number 0-100

function missingNo(nums) {
  return 5050 - nums.reduce((a, b) => a + b, 0)
}

```

&nbsp;

### Tags:
#codewars #javascript