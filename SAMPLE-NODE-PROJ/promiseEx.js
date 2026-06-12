const isEven = new Promise((resolve, reject) => {
    const n = 7;

    if (n % 2 === 0) {
        resolve('The number is even');
    } else {
        reject('The number is odd');
    }
});

isEven
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('The promise has completed');
    });