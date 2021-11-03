import * as fs from 'fs';

const N = 7;
let value = [];

function start(N){
    let arr = N_reshuffle(N);
    enumeration_of_values(arr);
    setTimeout(count_string, 100);
}

function N_reshuffle(N){
    let arr = [];
    for (let i = 1; i <= N; i++){
        arr.push(i);
        arr.push(0);
    }
    return arr.sort(); // [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7]
}

const enumeration_of_values = (arr, m = []) => {
    if (arr.length === 0) {
        let n = JSON.stringify(m.join('')).replace('"', "").replace('"', "");
        if (value.indexOf(n) == -1){
            value.push(n);
            // console.log(n);
            fs.appendFile('values.txt', n + "\n", function () {});
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            let copy_arr = arr.slice(); // copy array
            let next = copy_arr.splice(i, 1); // delete arr[i] return delete value
            enumeration_of_values(copy_arr.slice(), m.concat(next)); // add in finish m
        }
    }
};

function count_string(){
    const file = fs.readFileSync('values.txt');
    const file_to_string = file.toString();
    const count = file_to_string.split("\n").length - 1;
    console.log('Файл values.txt');
    console.log('Количество строк в файле: ', count);
}

const start_time = Date.now();
start(N);
let end_time = Date.now() - start_time;
console.log('Time:', end_time / 1000, 's');