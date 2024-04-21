//     * 
//    * *
//   * * *
//  * * * *
// * * * * *
let num = 5;
for(let i = 1;i <= num;i++){
    let row = '';
    for(let j = num;j > i;j--){
        row += ' ';
    }
    for(j = 1;j <= i;j++){
        row += '*';
        row += ' ';
    }
    console.log(row);
}