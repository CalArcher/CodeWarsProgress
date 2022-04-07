# Credit Card Mask


Created:  2022-04-06

[1]: https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

```

&nbsp;

## Pseudo code:
- Find if array length is longer than 4
- If it is, start at first element and change all elements to '#' except for the last four elements

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function maskify(cc){
    cc = cc.split('')
    if (cc.length > 4){
        for (let i = 0; i < cc.length - 4; i++){
            cc[i] = '#'
        }
        return cc.join('')
    }else {
        return cc.join('')
    }
}

```

&nbsp;

## **Solution practicing .map() method:**

<!-- code below -->

```javascript

function maskify(cc){
    cc = cc.split('')
    if (cc.length > 4){
        return cc.map((e,i) => {
            if (i < cc.length - 4){
                return e = '#'
            }else{
                return e
            }
        }).join('')
        
    }else {
        return cc.join('')
    }
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

//all other solutions were using regex

```

&nbsp;

### Tags:
#codewars #100Devs #javascript