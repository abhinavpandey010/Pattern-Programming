// *
// ***
// *****
// *******
// *********
let k = 0;
while(k < 5){
    for(let i = 1;i <= 5;i++){
        let row = '';
        for(let j = 1;j <= k+i;j++){
            row += '*';
        }
        console.log(row);
        k++;
    }
}