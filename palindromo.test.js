const isPalindrome = require('./palindromo');

test('palindrome "arara" para dar true', () => {
    expect(isPalindrome ('arara')).toBe(true);
});  

test('palindrome "Subi no ônibus" para dar true', () => {
    expect(isPalindrome ('Subi no ônibus')).toBe(true);
});  

test('palindrome "Marrocos" para dar false', () => {
    expect(isPalindrome ('Marrocos')).toBe(false);
});  
