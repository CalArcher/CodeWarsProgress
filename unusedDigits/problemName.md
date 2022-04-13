# Filter Unused Digits

Created:  2022-04-13

[1]: https://www.codewars.com/kata/55de6173a8fbe814ee000061/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Given a varying number of integer arguments, return the digits that are not present in any of them.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

```

&nbsp;

## Note:
- the digits in the resulting string should be sorted.

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function unusedDigits(...args){
    arr = Array.from(new Set(args.join(''))).join('')
    let unused = ''
    for (let i =0; i < 10; i++){
        if(arr.indexOf(i) == -1){
            unused += i
        }
    }
    return unused
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function unusedDigits(...a){
  return `0123456789`.split('').filter(b=>`${a}`.split('').indexOf(b)==-1).join('');
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript