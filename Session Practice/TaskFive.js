//Task Five

function pow(x,n){

    let ans = 1

    for(let i = 0 ; i < n ; i++){
        ans *= x;
    }

    return ans;
}

alert(pow(3,0));
