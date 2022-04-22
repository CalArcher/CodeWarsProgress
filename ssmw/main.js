function spinWords(s){
    s = s.split(' ').map(e => {
       if(e.length >= 5){
           return e.split('').reverse().join('')
       }else{
           return e
       }
   })
   return s.join(' ')
}