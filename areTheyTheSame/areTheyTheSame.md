# Are they the 'same'?

Created:  2022-05-27

[1]: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.




&nbsp;

### **Example:** 
<!-- code below -->

```javascript

Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write bs elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

```

&nbsp;

## Note:

a or b might be [] or {} (all languages except R, Shell).

a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

&nbsp;

## Pseudo Code:
- Since we know that to be true, arr2 has to equal arr1 squared, we can simply square each element of arr1.
- Next, sort both arrays in the same order, then compare them. 

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function comp(arr1, arr2){
    if(arr1 === null || arr2 === null) return false;
    let sortedSquared = arr1.map(e => e**2)
    sortedSquared.sort((a,b) => a - b)
    arr2.sort((a,b) => a - b)
    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] != sortedSquared[i]){
            return false
        }
    }    
    return true
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function comp(a,b){

    try{
         var a1 = a.map(x => x*x).sort();
         b.sort();
       } catch (err) { return false; }
     
    return (a1.toString() == b.toString() ? true : false);
   
   }

```

&nbsp;

### Tags:
#codewars #javascript #tryCatch #map #compare