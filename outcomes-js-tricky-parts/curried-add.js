function curriedAdd(total) {
    if(total === undefinded) return 0;
    return function addNext(num){
        if(num === undefinded) return total;
        total += num;
        return addNext;
    };
}

module.exports = { curriedAdd };
