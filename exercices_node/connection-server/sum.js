function sum(a, b) {
    // one way
    // if ( !a ) a = 0 // si a es undefined se asigna 0
    // if ( !b ) b = 0
    var a = a || 0
    var b = b || 0
    return a + b
}

sum() //0

sum(3) //3
sum(3, 5) // 8
