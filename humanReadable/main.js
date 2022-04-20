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