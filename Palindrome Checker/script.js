document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('check-btn');
    const textInput = document.getElementById('text-input');
    const resultDisplay = document.getElementById('result');

    checkButton.addEventListener('click', () => {
        const text = textInput.value;
        if (!text) {
            alert('Please input a value');
            return;
        }
        const isPalindrome = checkPalindrome(text);
        resultDisplay.textContent = `${text} is ${isPalindrome ? '' : 'not '}a palindrome`;
    });

    function checkPalindrome(text) {
        const cleanedText = text.replace(/[\W_]/g, '').toLowerCase();
        const reversedText = cleanedText.split('').reverse().join('');
        return cleanedText === reversedText;
    }
});
