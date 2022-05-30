# Build Tower


[1]: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.



&nbsp;

### **Example:** 
<!-- code below -->

```javascript

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

```


&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function towerBuilder(n){
    let tower = []
    let counter = 1
    let end = 2*n -1
    for(let i = 1; i <= n; i++){
        let spaces = n % 2 === 0 ? (end - counter + 1) / 2 : (end - counter) / 2
        let floor = spaces > 0 ? ' '.repeat(spaces) + '*'.repeat(counter) + ' '.repeat(spaces) : '*'.repeat(counter)
        tower.push(floor)
        counter += 2
    }
    return tower
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

```

&nbsp;

### Tags:
#codewars #javascript