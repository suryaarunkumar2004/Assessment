function checkEven(n) {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0) {
            resolve("Number is Even");
        } else {
            reject("Number is Odd");
        }
    });
}

async function run() {
    try {
        const result = await checkEven(4);
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Execution Completed");
    }
}

run();