# Array.diff hero

[1]: https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8/train/javascript

## [Kata link][1]

&nbsp;

## Question

---

&nbsp;

You know about simple Array.diff task. Now try to solve enhanced version!

Your goal in this kata is to implement a difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b. Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5 000 000 elements.

&nbsp;

### **Example:**

<!-- code below -->

```javascript
arrayDiffVeryFast([1, 2, 2, 2, 3], [2]) == [1, 3]
```

&nbsp;

## **Solution:**

<!-- code below -->

```javascript
function arrayDiffVeryFast(a, b) {
  const noDup = new Set(b)
  let output = a.filter((a) => {
    return !noDup.has(a)
  })
  return output
}
```
