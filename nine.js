/**
 * 
 */
console.log('\t1\t2\t3\t4\t5\t6\t7\t8\t9\t')
for(var x = 1;x < 10; x++){
    var a = '';
    for(var y = 1;y <= x; y++){
        a = a + x * y + '\t'; 
    } 
    a = `${x}\t`+ a ;
    console.log(a)   
} 
//a = `${x}\t` + a;
//console.log(a);

for(var x= 1; x < 10; x++){
    var a = [];
    for(var y = 1; y <= x;y++){
        a.push(`${x * y}\t`);
    }
    console.log(a.toString());
}
 
