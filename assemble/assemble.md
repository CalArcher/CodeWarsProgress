# Assemble string

Created:  2022-04-23

[1]: https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

In this task, you need to restore a string from a list of its copies.

You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

If the array is empty, then return an empty string.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

input = [
  "a*cde",
  "*bcde",
  "abc*e"
]
result = "abcde"


input = [
  "a*c**",
  "**cd*",
  "a*cd*"
]
result = "a#cd#"

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function assembleString(arr){
    console.log(arr, 'test')
    if(arr.length === 0){
        return ''
    }
    let word = arr[0].split('')
    let n = arr.map(el => {
        return el.split('')
    })
    console.log(n)
    for(let i = 0; i < n.length; i++){
        let next = n[i + 1]
        for(let j = 0; j < n[i].length; j++){
            let c = n[i][j]
            if (word[j] === '*'){
                word[j] = '#'
            }
            if(word[j] === '*' || word[j] === '#' && c != '*'){
                word[j] = c
            }else if(word[j] === '*' && c === '*'){
                word[j] = '#'
            }
            
        }
    }
    
    return word.join('')
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function assembleString(array){  
  return !array.length ? "" : [...array[0]].map((x, i) => {
    let s = array.find(y => y[i] != "*")
    return !s ? "#" : s[i]
  }).join``
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript #find #spread