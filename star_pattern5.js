// *
// **
// ***
// ****
// ***
// **
// *
let n = 4;
for(let i = 1;i <= n;i++){
    let row = '';
    for(let j = 1;j <= i;j++){
        row += '*';

    }
    console.log(row);
    if(i == n){
        for(let k = 1;k < n;k++){
            row = '';
            for(j = k;j < n;j++){
                   row += '*';
            }
            console.log(row);
        }
    }
}