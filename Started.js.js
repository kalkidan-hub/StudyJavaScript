function multiplyByShift(n1,n2){
    numShift=n2.toString(2)
    ct=numShift.length-1
    mul=0
    for(i in numShift){
        if(i==1){
            mul+=n1<<2**ct
        }
        ct-=1
    }

    return mul 
    // therefore this code does multiplication by shift operation. coooollll
}
