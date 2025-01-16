function hackerrankInString(s) {
    let target = "hackerrank";
    let i = 0;

    for (let char of s) {
        if (char === target[i]) {
            i++;
        }
        if (i === target.length) {
            return "YES";
        }
    }

    return "NO";
}

// Example usage
console.log(hackerrankInString("hereiamstackerrank")); // Output: "YES"
console.log(hackerrankInString("hackerworld")); // Output: "NO"

