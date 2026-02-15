// Task Three

let primeArr = []

for(let i = 2 ; i <=10 ; i++){

    let flag = true;

    for(let j = 2 ; j <= Math.sqrt(i) ; j++){

        if( i % j == 0 ){
            flag = false;
        }
    }

    if(flag)
        primeArr.push(i)
}

alert(primeArr)