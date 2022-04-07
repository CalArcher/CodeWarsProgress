//Solution

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

//Solution practicing .map() method

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