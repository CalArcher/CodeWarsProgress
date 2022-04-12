# ATM

Created:  2022-04-12

[1]: https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function solve(n){
    let remainder = n
    let counter = 0
    for (let i =1; i < 100; i++){
        if (remainder < 10){
            break
        }
        if (remainder >= 500){
            remainder = remainder - 500
            counter++
        }else if (remainder >= 200){
            remainder = remainder - 200
            counter++
        }else if (remainder >= 100){
            remainder = remainder - 100
            counter++
        }else if (remainder >= 50){
            remainder -= 50
            counter++
        }else if (remainder >= 20){
            remainder -= 20
            counter++
        }else if(remainder >= 10){
            remainder -= 10
            counter++
        }
    }
    return remainder > 0 ? -1 : counter
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

//cool solution 
H=Q=>(Q/5|0)+(Q%5/2|0)+(1&Q%5)
solve=Q=>Q%10?-1:H(Q/100)+H(Q%100/10)

//serious solution
function solve(n) {
  if (n % 10) return -1
  return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
    let ans = n / v | 0
    n %= v
    return s + ans
  }, 0)
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript