"use strict";
exports.__esModule = true;
var fs = require("fs");
var N = 7;
var value = [];
function start(N) {
    var arr = N_reshuffle(N);
    enumeration_of_values(arr);
    setTimeout(count_string, 100);
}
function N_reshuffle(N) {
    var arr = [];
    for (var i = 1; i <= N; i++) {
        arr.push(i);
        arr.push(0);
    }
    return arr.sort(); // [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7]
}
var enumeration_of_values = function (arr, m) {
    if (m === void 0) { m = []; }
    if (arr.length === 0) {
        var n = JSON.stringify(m.join('')).replace('"', "").replace('"', "");
        if (value.indexOf(n) == -1) {
            value.push(n);
            // console.log(n);
            fs.appendFile('values.txt', n + "\n", function () { });
        }
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            var copy_arr = arr.slice(); // copy array
            var next = copy_arr.splice(i, 1); // delete arr[i] return delete value
            enumeration_of_values(copy_arr.slice(), m.concat(next)); // add in finish m
        }
    }
};
function count_string() {
    var file = fs.readFileSync('values.txt');
    var file_to_string = file.toString();
    var count = file_to_string.split("\n").length - 1;
    console.log('Файл values.txt');
    console.log('Количество строк в файле: ', count);
}
var start_time = Date.now();
start(N);
var end_time = Date.now() - start_time;
console.log('Time:', end_time / 1000, 's');
//# sourceMappingURL=app.js.map