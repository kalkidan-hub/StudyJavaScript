// l=`wanna try a "thing"`
// l+=`and that is ${2+4}`
// console.log(l)

conc=`${2+2.0}`+`  ${`${45+90}`}`
//console.log(conc)  //no concatenation of the content, when it's not a stringo

console.log(typeof (typeof "100"/"banana"))
console.log(typeof NaN)
//I wanna change a number to its base 4,3 and 2 format and wanna see if I can find any pattern...


function whatPatter(num1){
    binary=num1.toString(2)
    tertiary=num1.toString(3)
    quaternary=num1.toString(4)
    nanotic=num1.toString(9)
    dudoHeptic=num1.toString(27)
    console.log(binary,"\t",tertiary,)
    console.log(quaternary,"\t\t",dudoHeptic)  
    return 0 // 4 for 2, 27(3**3) for 3, not 9...
} 



