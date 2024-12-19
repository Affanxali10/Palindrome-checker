function isPalindrome(str) {
    var cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}
function promptPalindrome() {
    var inputText = prompt("Enter a word or phrase to check if it's a palindrome:");

    if (inputText !== null && inputText.trim() !== "") {

        var result = isPalindrome(inputText);
        if (result) {
            document.getElementById('result').innerHTML = `"${inputText}" is a Palindrome!`;
        } else {
            document.getElementById('result').innerHTML = `"${inputText}" is NOT a Palindrome.`;
        }
    } else {
        alert("Please enter valid text.");
    }
}
