# Stop gninnipS My sdroW!

Created:  2022-04-22

[1]: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function spinWords(s){
    s = s.split(' ').map(e => {
       if(e.length >= 5){
           return e.split('').reverse().join('')
       }else{
           return e
       }
   })
   return s.join(' ')
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript #map #reverse