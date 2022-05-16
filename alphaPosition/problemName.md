# Replace With Alphabet Position

Created:  2022-05-16

[1]: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

```


&nbsp;

## Pseudo Code:
- To assign a numerical value to a letter, we can get the UTF-8 character code 
- The character code for letters are 64 through 91, so we need to subtract 64 from the conversion result to assign numbers 1-26 to the alphabet

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function alphabetPosition(text){
    text = text.toUpperCase()
    let numbers = ''
    for(let i = 0; i<text.length; i++){
        let letter = text.charCodeAt(i) - 64
        if(letter > 0 && letter < 27){
            numbers += ' ' + letter
        }
    }
    return numbers.slice(1, numbers.length)
}

```



&nbsp;

### Tags:
#codewars #javascript #alphabet #charCode