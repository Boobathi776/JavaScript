function bookTicket(seatNumber) {
    return new Promise((resolve, reject) => {
        console.log(`Booking seat ${seatNumber}...`);
        
        setTimeout(() => {
            const isBooked = Math.random() > 0.2; // 80% chance of success
            if (isBooked) {
                resolve(`Seat ${seatNumber} successfully booked!`);
            } else {
                reject(`Seat ${seatNumber} is already taken.`);
            }
        }, 2000); // Simulating 2 second delay
    });
}

// Usage:
// bookTicket("A1")
//     .then(message => console.log("✅", message))
//     .catch(error => console.log("❌", error));

bookTicket("A1")
    .then(msg => {
        console.log(msg);
        return bookTicket("A2");
    })
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.error("Error:", err);
    });

