# Human Readable Time

Created: 2022-04-20

[1]: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

&nbsp;


## **Solution:**

<!-- code below -->

```javascript

function humanReadable(s){
    s = s
    let h = 0
    let m = 0
    while(s >= 60){
        if(s >= 3600){
            s -= 3600
            h++
        }else if(s >= 60){
            s -= 60
            m++
        }
    }
    h = h.toString().length > 1 ? h : '0'+h
    s = s.toString().length > 1 ? s : '0'+s
    m = m.toString().length > 1 ? m : '0'+m
   return (`${h}:${m}:${s}`)
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}


function humanReadable(seconds) {
  return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ( '' + n|0)).substr(-2)).join(':')
}


function humanReadable(t) {
  function d(v) { return ('0' + v).slice(-2) }
  
  var s = t % 60;
  var m = (t / 60 | 0) % 60;
  var h = t / 3600 | 0;
  
  return d(h) + ':' + d(m) + ':' + d(s);
}


```

&nbsp;

### Tags:
#codewars #100Devs #javascriptn #bitwiseOperator