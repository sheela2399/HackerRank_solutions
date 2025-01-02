function minimumNumber(n, password) {

    const digits = /\d/;
    const lower = /[a-z]/;
    const upper = /[A-Z]/;
    const special = /[!@#$%^&*()\-\+]/;

    let missingCount = 0;
    if (!digits.test(password)) missingCount++;
    if (!lower.test(password)) missingCount++;
    if (!upper.test(password)) missingCount++;
    if (!special.test(password)) missingCount++;

    // Ensure minimum length
    return Math.max(missingCount, 6 - n);
}

// minimumNumber(3, "sheelM")

const n = 3; 
const password = "Ab1";
console.log(minimumNumber(n, password)); // Output: 3
