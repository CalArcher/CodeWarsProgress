# isPrime

Created:  2022-05-20

[1]: https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.


&nbsp;

### **Example:** 
<!-- code below -->

```javascript

is_prime(1)  /* false */
is_prime(2)  /* true  */
is_prime(-1) /* false */

```
&nbsp;

## Pseudo Code:
- A number is prime if no number other than 1 and itself divide into it
- The only way to test this is to test every single number up to that number
- To reduce the amount of times we need to run the loop, we can set the end of the loop to be the numbers square root, as that is the highest number that can divide into it

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function isPrime(n){
    let squareRoot = n ** .5
    for(let i = 2; i <= squareRoot; i++){
        if(n % i === 0){
            return false
        }
    }
    return n > 1
}

```

&nbsp;

### Tags:
#codewars #javascript #squareRoot