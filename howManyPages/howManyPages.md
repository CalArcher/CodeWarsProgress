# How many pages in a book?

Created:  2022-04-15

[1]: https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.


&nbsp;

### **Example:** 
<!-- code below -->

```javascript

If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

```

&nbsp;

## Note:
- Be aware that you'll get enormous books having up to 100.000 pages.
- All inputs will be valid.

&nbsp;


## **Solution:**

<!-- code below -->

```javascript

function amountOfPages(s){
    let str = ''
    for (let i = 1; i <= s; i++){
        str += i
        if (str.length >= s){
            str = i
            break
        }
    }
    return str
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript
//obviously a while loop was the better choice here
function amountOfPages(summary){
  let counter = 1;
  let string = '';
  
  while(string.length < summary) {
    string += counter
    counter++
  }
  return counter - 1
  
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript