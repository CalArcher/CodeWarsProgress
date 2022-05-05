# Disemvowel Trolls

Created:  2022-05-04

[1]: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".



&nbsp;


## Note:
- for this kata y isn't considered a vowel.


&nbsp;

## **Solution:**

<!-- code below -->

```javascript


function disemvowel(str){
    let vowels = ['a','e','i','o','u','A','E','I','O','U']

    let s = Array.from(str).filter(e => {
        if(vowels.includes(e) === false){
            return e
        }
    }).join('')
    return s
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

//regex
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

```

&nbsp;

### Tags:
#codewars #javascript #filter #regex