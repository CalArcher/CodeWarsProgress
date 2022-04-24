# Counting Duplicates

Created: 2022-04-24

[1]: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

```
&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function duplicateCount(t){
    let dup = Array.from(t.toLowerCase())
    let noDup = Array.from(new Set(dup))
    let count = 0
    for(let i = 0; i<noDup.length; i++){
        let fCount = 0
        for (let j = 0; j<dup.length; j++){
            if(noDup[i] === dup[j]){
                fCount++
            }
        }
        if(fCount>1){
            count++
        }
    }
    return count
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascriptn #duplicates #indexOf