/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let length = s.length;
    for (let i = 0; i < length / 2; i++) {
        if (s[i] !== s[length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// s = "A man, a plan, a canal: Panama"
console.log(isPalindrome("A man, a plan, a canal: Panama"
)); 