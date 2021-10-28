const s = 'aaa_aa_a'
const r1 = /a+/g
const r2 = /a+/y
//y is sticky search from the next , in this one mean after aaa, it from _
console.log(r1.exec(s))
console.log(r2.exec(s))
console.log(r1.exec(s))
console.log(r2.exec(s))