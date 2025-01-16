function anagram(s) {
    // If the length is odd, it's impossible to make an anagram
    if (s.length % 2 !== 0) return -1;

    const mid = s.length / 2;
    const firstHalf = s.slice(0, mid);
    const secondHalf = s.slice(mid);

    const charCount = {};

    // Count characters in the first half
    for (let char of firstHalf) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract character counts using the second half
    for (let char of secondHalf) {
        if (charCount[char]) {
            charCount[char]--;
        }
    }

    // Count the remaining characters in the first half
    const changes = Object.values(charCount).reduce((sum, count) => sum + count, 0);

    return changes;
}

// Example usage:
console.log(anagram("aaabbb")); // Output: 3
console.log(anagram("ab"));     // Output: 1
console.log(anagram("abc"));    // Output: -1
console.log(anagram("mnop"));   // Output: 2
console.log(anagram("xyyx"));   // Output: 0
console.log(anagram("xaxbbbxx")); // Output: 1
