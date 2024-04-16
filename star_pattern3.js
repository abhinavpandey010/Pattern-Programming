//    *
//   ***
//  *****
// *******
let num = 4;
for(let i = 1;i <= num;i++){
    let row = '';
    for(let j = i;j < num;j++){
        row += ' ';
    }
    for(j = 1;j <= (2*i)-1;j++){
        row += '*';
    }
    console.log(row);
}