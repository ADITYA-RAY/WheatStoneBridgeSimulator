// Aditya Ghidora
// source for the formulae
// https://en.wikipedia.org/wiki/Wheatstone_bridge
let r1 = 5,r2 = 5, r3 = 5, r4 = 5, vs = 10;

function galvanometer(r1,r2,r3,r4,vs)
{
    // Takes the 4 resistances and a supply voltage
    // outputs the galvanometer voltage
    let first = r2/(r1+r2), second = r4/(r3+r4);
    let vg = (first - second)*vs;
    return vg;
}

function unkownResistance(r1,r2,r3,vg,vs)
{
    // Takes the first 3 resistances, galvanometer voltage and supply voltage
    // outputs the unknown resistance
    let numerator = r2*vs - (r1+r2)*vg;
    let denominator = r1*vs +(r1+r2)*vg;
    let rx = (numerator*r3)/denominator;
    return rx;
}

// let vg1 = galvanometer(r1,r2,r3,r4,vs);

// console.log(vg1);
// console.log(unkownResistance(r1,r2,r3,vg1,vs));

// Aditya Ghidora
