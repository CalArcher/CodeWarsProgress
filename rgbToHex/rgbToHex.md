# RGB To Hex Conversion


Created:  2022-04-21

[1]: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

&nbsp;

### **Example:** 
<!-- code below -->

```javascript

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

```

&nbsp;


## **Solution:**

<!-- code below -->

```javascript

function ColorToHex(c) {
    if (c < 0){
        c = 0
    }
    if (c > 255){
        c = 255
    }
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
}
  
function rgb(r, g, b) {
    return ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

//-----

function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}

```

&nbsp;

### Tags:
#codewars #100Devs #javascript #rgbToHex #rgb #hex