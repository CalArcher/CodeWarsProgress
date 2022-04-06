# Insert dashes

Created:  2022-04-06

[1]: https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript

## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

&nbsp;

## Note:
- Note that the number will always be non-negative (>= 0).


&nbsp;




## Pseudo code:
- Find all odd numbers with an odd next element 
- Replace the first odd number with element + '-'

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function insertDash(num){
    num = num.toString().split('')
    let s = num.map((item, index) => {
        if (item % 2 > 0 && (num[index + 1]) % 2 > 0){
            return item + '-'
        }else {
            return item
        }
        
    })
    return s.join('')
}

```



&nbsp;

### Tags:
#codewars #100Devs #javascript