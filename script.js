document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    // Check if the input is empty
    if (!textInput) {
        alert('Please input a value');
        return;
    }

    // Normalize the input: remove non-alphanumeric characters and convert to lower case
    const cleanedInput = textInput.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if the cleaned input is a palindrome
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

    // Display the result with the original input preserved
    if (isPalindrome) {
        resultDiv.textContent = `${textInput} is a palindrome`;
    } else {
        resultDiv.textContent = `${textInput} is not a palindrome`;
    }
});
