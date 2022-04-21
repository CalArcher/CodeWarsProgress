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