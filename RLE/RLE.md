# Run-length encoding

Created:  2022-05-19

[1]: https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

As the article states, RLE is a very simple form of data compression. Its only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]

```


&nbsp;

## Pseudo Code:
- this is a simple task of comparing each element of an array against the one before it, and keeping a count if the next element is the same
- if the last element is not the same as the current element, add the count of elements and the element type as a new nested array

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function runLengthEncoding(str){
    str = str.split('')
    let smaller = [], prev, count
    for(let i = 0; i<=str.length; i++){
        if(str[i] !== prev){
            smaller.push([count, prev])
            prev = str[i]
            count = 1
        }else{
            count ++
        }
    }
    smaller.shift()
    return smaller
}

```

&nbsp;


### Tags:
#codewars #javascript #nestedArray #encoding