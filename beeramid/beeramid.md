# Beeramid

Created:  2022-05-18

[1]: https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16

```


&nbsp;

## Pseudo Code:
- divide money by price to get how many cans you can build with
- in a loop starting at 1, square i and subtract it from cans. 
- for each iteration, add 1 to a rows count var
- stop the loop before the cans is less than zero

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function beeramid(bonus, price){
    let cans = bonus/price
    let rows = 0
    for (let i = 1; i < 100; i++){
        let x = i**2
        if(cans - x >= 0){
            cans -= x
            rows ++
        }else{
            break
        }
    }
    return rows
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

const beeramid = (bonus, price, lvl = 1) =>
  bonus - lvl ** 2 * price < 0 ? --lvl : beeramid(bonus - lvl ** 2 * price, price, ++lvl);

```

&nbsp;

### Tags:
#codewars #javascript