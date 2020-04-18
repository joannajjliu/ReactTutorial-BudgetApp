const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Mojo',
        //     age: 81
        // });
        reject('Something went wrong!');
    }, 1500); //returns in 1.5s
});

console.log("before");

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('2', error);
});

console.log("after");