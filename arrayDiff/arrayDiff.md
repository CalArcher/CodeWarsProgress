# Array.diff

Created:  2022-05-02

[1]: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

arrayDiff([1,2],[1]) == [2]

```

&nbsp;

## Note:
- If a value is present in b, all of its occurrences must be removed from the other:


&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function arrayDiff(a, b){
    return a.filter(e => {
        if(b.includes(e) == false){
            return e
        }
    })
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

```

&nbsp;

### Tags:
#codewars #javascript #filter #array #difference