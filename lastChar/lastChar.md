# Sort by Last Char



[1]: https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.


&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function last(x){
    let sortedByLast = x.split(' ').sort((a, b) => a[a.length - 1].localeCompare(b[b.length -1]));
    if(x == undefined) return null
    return sortedByLast
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

```

&nbsp;

### Tags:
#codewars #javascript