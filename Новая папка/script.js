function infIput (){
    const newArr = [];
    
    while (true){
    
    let word = prompt('Enter a word')
    if(word === 'exit'){
        break;
    }
    if(word === null || word === ''){
        newArr.pop();
    } else{
        newArr.push(word);
    }
    console.log(newArr);
    }
    
}
infIput();


function mapArrTest(){
    const array = [];
    for( let i =0; i < 101 ; i++){
        array.push(i);
    }
    
    return array;
}
 
const result = mapArrTest();
const newArr = result.map(function(item, index, arr){
return item *3;
});

console.log(newArr);

