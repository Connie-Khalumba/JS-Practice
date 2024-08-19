function   checkSign (num) {
    let results ;
    if (num > 0){
        results = "positive"
    }
    else if (num < 0){
        results = "negative"
    }
    else{
        results = 0
    }
    console.log(results)
};
checkSign(867)