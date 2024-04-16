// 1
// 11
// 112
// 1212
// 12123
// 123123
let temp1 = '';
let temp2 = '';
for(let i = 0;i<=6;i++){
    let row1 = '';
    let row2 = '';
    if(i%2===0){
        for(let j = 1;j<=(i/2);j++){
            row1+=j;
            temp1=row1;
        }
    }
    else{
        for(let k = 1;k<=(i/2+1);k++){
            row2+=k;
            temp2=row2
        }
    }
    console.log(temp1+""+temp2);
}
