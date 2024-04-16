// ****
//  ***
//   **
//    *
let num = 4;
for(let i = 1;i <= num;i++){
    let row = '';
    for(let j = 1;j < i;j++){
      row += ' ';
    }
    for(let j = num;j >= i;j--){
        row += '*';
      }
    console.log(row);
}