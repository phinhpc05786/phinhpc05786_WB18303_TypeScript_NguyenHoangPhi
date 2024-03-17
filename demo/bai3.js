// let so = 4;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let sochan = (so: number) =>{
//  if(!(so % 2)){
//     console.log(so);   
//  }else {
//     console.log('số sai');
//  }
// }
// sochan(so);
var sum = function (x, y) {
    if (x === void 0) { x = 5; }
    return x + y;
};
console.log(sum(0));
var pop = function (o) {
    console.log("ggdgf" + o);
};
pop(sum(4));
pop(sum(undefined, 5));
pop(sum(3, 5));
var hello = function (msg) {
    if (msg === void 0) { msg = "wdjdbfgdhdhdhd"; }
    return "heloooo ".concat(msg);
};
console.log(hello("dgffdf"));
var person = {
    name: 'John',
    age: 20
};
var salary = {
    grade: 'basic',
    basic: "ddsas"
};
var summary = __assign(__assign({}, person), salary);
console.log(summary);
