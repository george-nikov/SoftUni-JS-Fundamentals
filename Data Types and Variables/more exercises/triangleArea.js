function triangleArea(a,b,c) {

    let halfS = (a+b+c)/2
    let formula = Math.sqrt(halfS*(halfS-a)*(halfS-b)*(halfS-c))

    console.log(formula);
}
triangleArea(2, 3.5, 4)
