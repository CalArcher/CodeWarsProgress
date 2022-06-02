# Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark



[1]: https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"

```


&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function remove(string){
    let sentenceWithPossibleSingleExclamationMarks = string.split(' ')
    let removedSingleExclamationMark = []
    for(let iterationVariable = 0; iterationVariable<sentenceWithPossibleSingleExclamationMarks.length; iterationVariable++){
        let first = sentenceWithPossibleSingleExclamationMarks[iterationVariable].indexOf('!'), last = sentenceWithPossibleSingleExclamationMarks[iterationVariable].lastIndexOf('!')
        if(first != last || first == -1 ){
            removedSingleExclamationMark.push(sentenceWithPossibleSingleExclamationMarks[iterationVariable])
        }
    }
    return removedSingleExclamationMark.join(' ')
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}

```

&nbsp;

### Tags:
#codewars #javascript