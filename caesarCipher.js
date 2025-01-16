function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shift = k % 26; // Normalize the shift to a value between 0 and 25
    let result = '';

    for (let char of s) {
        // Check if the character is a letter
if(alphabet.includes(char.toLowerCase())){
    const isUpperCase = char === char.toUpperCase();
    const currentIndex = alphabet.indexOf(char.toLowerCase());
    const newIndex = (currentIndex + shift) % 26;
    const newChar = alphabet[newIndex];

            // Maintain original case
            result += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            // Non-alphabet characters remain unchanged
            result += char;
        }
    }

    return result;
}

// Example usage:
console.log(caesarCipher("middle-Outz", 2)); // Output: "okffng-Qwvb"
console.log(caesarCipher("Hello, World!", 5)); // Output: "Mjqqt, Btwqi!"
console.log(caesarCipher("abc", 52)); // Output: "abc" (because 52 is a full cycle)



