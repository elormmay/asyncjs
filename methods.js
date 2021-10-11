let asyncFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("asyncFunction has resolved");
        }, 4000);
    });
};

let asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("asyncFunction2 is done!");
        }, 3000);
    });
};