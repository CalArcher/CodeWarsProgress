# Shortest steps to a number

Created:  2022-05-17

[1]: https://www.codewars.com/kata/5cd4aec6abc7260028dcd942/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.

Description:
A step is defined as either:

Adding 1 to the number: num += 1
Doubling the number: num *= 2
You will always start from the number 1 and you will have to return the shortest count of steps it would take to land exactly on that number.

1 <= num <= 10000



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

num == 16 would return 4 steps:

1 -- +1 --> 2:        1 step
2 -- x2 --> 4:        2 steps
4 -- x2 --> 8:        3 steps
8 -- x2 --> 16:       4 steps

4 steps

```

&nbsp;


## Pseudo Code:
- The shortest route to the number is hard to find by starting at 1. 
- The easy way is to start at the given number, and work your way to 1 the fastest way possible, by dividing whenever possible.
- When the number is even, divide by 2, else, subtract 1 so that you can divide by 2 immediately after

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function shortestStepsToNum(num){
    let steps = 0
    while(num >= 2){
        num % 2 === 0 ? num /= 2 : num -= 1;
        steps ++
    }
    return steps
}

```

&nbsp;

### Tags:
#codewars #javascript 