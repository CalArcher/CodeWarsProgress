# From..To..Series #1: from m to n. Find the maximum range

Created:  2022-05-05

[1]: https://www.codewars.com/kata/58065440a4647e0ed3000230/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Give you an array, like this:

["from 1 to 3","from 2 to 6","from -100 to 0"]
Find out the maximum range, return by an array:

findMaxRange(["from 1 to 3","from 2 to 6","from -100 to 0"])
return:
["from -100 to 0"]
If more than one elements have the maximum range, return them according to the order of the original array.

Input data is always an array. The format of all elements is always "from m to n". The value of from and to can be an integer or float. These are all possible: m > n or m == n or m < n



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

findMaxRange(["from 1 to 3","from 2 to 4","from 1 to 1"])
should return:
["from 1 to 3","from 2 to 4"]

findMaxRange(["from 1 to 10","from 10 to 1","from -1 to -10"])
should return:
["from 1 to 10","from 10 to 1","from -1 to -10"]

findMaxRange(["from 1 to 10","from 10.1 to 1","from -1 to -10"])
should return:
["from 10.1 to 1"]

findMaxRange([]) should return: []

```


&nbsp;

## **Solution:**

<!-- code below -->

```javascript


function findMaxRange(ranges){
    let justNums = []
    for(let i = 0; i<ranges.length; i++){
        let holder = ranges[i].split(' ').filter(e => {
            if (e.toLowerCase() === e.toUpperCase() || e == 0){
                return e
            }
        }).map(e => {return Number(e)})
        justNums.push(holder)
    }
    let maxRange = []
    let sum = []
    for(let i = 0; i<justNums.length; i++){
        sum.push(Math.abs(justNums[i][0] - justNums[i][1]))
    }
    let sumSort = sum.slice(0).sort((a,b) => b-a)
    for(let i = 0; i<sum.length; i++){
        if(sumSort[0] == sum[i]){
            maxRange.push(ranges[i])
        }
    }
    return maxRange
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function findMaxRange(a) {
    var m = 0, r = a.map(s => (
            s = s.slice(5).split(' to ').reduce((a,b) => Math.abs(a-b)), m<s && (m = s), s
        ));
    return a.filter((_,i) => r[i]==m);
}

```

&nbsp;

### Tags:
#codewars #javascript #sort #range #reduce #filter