# Adding Arrays

Created:  2022-04-11

[1]: https://www.codewars.com/kata/59778cb1b061e877c50000cc/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[['J','L','L','M']

,['u','i','i','a']

,['s','v','f','n']

,['t','e','e','']]

The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

arrAdder([
['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']
]) // => "Just Live Life Man"

arrAdder([ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"

```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function arrAdder(arr) {
    let combStr = ''
    for (let i = 0; i < arr[2].length; i++){
        console.log(arr[i].length)
        if (i > 0){
            combStr += ' '
        }
        for (let j = 0; j < arr.length; j++){
            combStr += arr[j][i]
        }
    }
    console.log(combStr)
    return combStr
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

const arrAdder = arr =>  arr[0].map((_,i)=>  arr.map((_,j)=> arr[j][i]).join('')).join(' ');

```

&nbsp;

### Tags:
#codewars #100Devs #javascript