function camelcase(p) {

    let wordCount = 1;
    
    for (let char of p) {
        // Check if the character is uppercase
        if (char >= 'A' && char <= 'Z') {
            wordCount++;
        }
    }
    
    return wordCount;
}

// Example usage
const s = "saveChangesInTheEditorBook";
const p = "saveChangesInTheEditorBookJames";


console.log(camelcase(p)); 
