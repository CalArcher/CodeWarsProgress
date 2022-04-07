# Number-Star ladder


Created:  2022-04-07

[1]: https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

pattern(3) should return "1\n1*2\n1**3", e.g. the following:

1
1*2
1**3

```

&nbsp;

## Note:
-  There is no newline in the end (after the pattern ends)


&nbsp;

## Pseudo code:
- Make array that has length n
- Get each element, add line break, 1, * repeat n times, and i + 1 value

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function pattern(n) {
    let s = '*', nStr = ''
    for (let i = 0; i < n; i++){
        if (i == 0){
            nStr += '1' 
        }else if(i === (n-1)){
            nStr += ('\n1' + s.repeat(i)+ (i+1))
        }else{
           nStr += ('\n1' + s.repeat(i)+ (i+1))
        }
    }
    return nStr
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

var pattern = (n) =>{
  var result = '1'
  for (var i = 2; i <= n; i++){
    result += '\n1' + '*'.repeat(i-1) + i
  }
  return result
}

const pattern =  n => Array.from({length:n},(_,i)=> i+1).map(el=> el > 1 ? 1 +'*'.repeat(el-1) + el : el).join('\n')


```

&nbsp;

### Tags:
#codewars #100Devs #javascript