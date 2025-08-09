// Simulate internal handling of a Promise
function customPromiseSimulator(executorFunction) {
    // The state of the custom promise
    let isFulfilled = false;
    let isRejected = false;
    let fulfilledValue;
    let rejectedReason;

    // Define the resolve function
    const resolve = (value) => {
        if (!isFulfilled && !isRejected) {
            isFulfilled = true;
            fulfilledValue = value;
            console.log("✅ Promise Resolved With:", value);
        }
    };

    // Define the reject function
    const reject = (reason) => {
        if (!isFulfilled && !isRejected) {
            isRejected = true;
            rejectedReason = reason;
            console.log("❌ Promise Rejected With:", reason);
        }
    };

    // Now we call the user-supplied function with resolve and reject
    try {
        executorFunction(resolve, reject);
    } catch (error) {
        reject(error); // if there's an error in executor, reject the promise
    }
}

// 🧑‍💻 Now we simulate what you would write when using a real Promise
customPromiseSimulator((resolve, reject) => {
    console.log("🛠️ Doing some async-like work...");

    // simulate async task
    setTimeout(() => {
        // resolve("Success!"); // uncomment this to test resolve
        reject("Something went wrong!"); // or test reject
    }, 2000);
});
