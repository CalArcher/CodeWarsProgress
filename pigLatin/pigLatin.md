# Simple Pig Latin


Created:  2022-04-18

[1]: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

//solution if punctuation is NOT allowed 
function pigIt(str){
    let s = str
    s = s.split(' ').map(word => {
        return word.substring(1) + word.substring(0,1) + 'ay' 
    })
    return s.join(' ')
}

//solution if punctuation IS allowed 
function pigIt(str){
    let a = str.split(' ')
    let punctuations = [".", ",", ":", ";", "!", "?"]
    let l = a.length
    for (let i = 0; i < l; i++){
        let m = a[i].length
        if (punctuations.indexOf(a[i][m - 1]) == -1){
            a[i] = a[i].slice(1) + a[i][0] + 'ay'
        }else if(m == 1){
            a[i] = a[i]
        }
        else{
            a[i] = a[i].slice(1) + a[i][0] + 'ay' + a[i][m-1]
            a[i] = a[i].replace(a[i][a[i].length -1], '')
        }
    }
    return a.join(' ')
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

//only solutions using regex were shown in solutions
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript