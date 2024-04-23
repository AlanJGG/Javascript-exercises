const sumAll = function(A, B) {
    
    if(!Number.isInteger(A) || !Number.isInteger(B)) return "ERROR";
    if(A < 0 || B < 0) return "ERROR";

    let sum = 0;

    if(A > B)
        [A, B] = [B, A];
        
    for(let i=A; i<=B; i++)
        sum += i;
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
