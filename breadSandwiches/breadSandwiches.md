# bread sandwiches

Created:  2022-04-16

[1]: https://www.codewars.com/kata/622a6a822494ab004b2c68d2/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

If you're not familiar with the fantastic culinary delights of the British Isles you may not know about the bread sandwich.

The idea is very simple - if you have a slice of bread between two other slices of bread, then it's a bread sandwich. Additionally, if you have a bread sandwich between two other slices of bread, you get a bread sandwich sandwich, and so on.

In this kata, we will define the following terms like so:

Sandwich - Two slices of bread which may or may not have a filling
Bread Sandwich - Two slices of bread which contains one slice of bread in the middle as a filling
You will need to build two functions:

Given the number of slices of bread, return the phrase used to refer to the sandwich

 2 - 'sandwich'

 5 - 'bread sandwich sandwich'

The reverse function - given the name of the sandwich, return how many slices of bread there are in the sandwich

'bread sandwich' - 3

'sandwich sandwich' - 4

&nbsp;

## Note:
- You should return None/null if there is no input / the input is invalid / there is no sandwich

- Maximum 100 slices of bread

&nbsp;

## **Solution:**

<!-- code below -->

```javascript


function slicesToName(n){
    if (n.toString() === n){
        return null
    }
    let b = 'bread '
    let s = 'sandwich '
    let str = ''
    if(n < 2 || isNaN(n) ){
        return null
    }
    else if (n % 2 === 0){
        n = n/2
        str = s.repeat(n)
    }
    else {
        n = (n - 1)/2
        str = b + s.repeat(n)
    }
    return str.slice(0,-1)
}
function nameToSlices(name){
    if (isNaN(name)){
    let s = name.toString().split(' ')
    if (s.filter(x => x == 'bread').length >1 || s.length < 2){
        return null
    }else if (s[0] != 'bread' && s.includes('bread') == true){
        return null
    }
    let bCount = 0
    let sCount = 0
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'bread'){
            bCount++
        }else if (s[i] === 'sandwich'){
            sCount++
        }else{
            return null
        }
    }
    return (bCount+ (sCount*2))
    }
    else{
        return null
    }
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

const slices={};for(let n=2;n<101;n++)slices[n]=(n%2?`bread `:``)+Array(~~(n/2)).fill(`sandwich`).join` `;
const names={};for(let n in slices)names[slices[n]]=n;

function slicesToName(n) {
  return n in slices ? slices[n] : null;
}

function nameToSlices(name) {
  return name in names ? names[name] : null;
}



```

&nbsp;

### Tags:
#codewars #100Devs #javascript