function pangrams(s) {
    
    const lowerCaseString = s.toLowerCase();
    
    // a set to track unique letters
    const letterSet = new Set();
    
    for (const char of lowerCaseString) {
        
        if (char >= 'a' && char <= 'z') {
            letterSet.add(char);
        }
    }
    
    return letterSet.size === 26 ? "pangram" : "not pangram";
}

const input = "The quick brown fox jumps over the dog";
console.log(pangrams(input)); // Output: " not pangram"
