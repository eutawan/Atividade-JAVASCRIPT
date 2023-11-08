function semiperimetro(a,b,c){
    return (a+ b + c) / 2
}

let areaTriangulo = function (L1, L2, L3) {
    const s = semiperimetro(L1,L2,L3)

    let a = Math.sqrt(s * (s - L1) * (s - L2) * (s - L3))

    return a
}

console.log(areaTriangulo(5,6,7))