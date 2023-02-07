Feature: Palindrome verification

Scenario: Verify if a word is a palindrome
  Given a word "A man, a plan, a canal, Panama!"
  When I check if it is a palindrome
  Then the result should be true

Scenario: Verify if a word is not a palindrome
  Given a word "A car"
  When I check if it is a palindrome
  Then the result should be false
const { Given, When, Then } = require('cucumber');
const assert = require('assert');

function isPalindrome(word) {
  word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  return word === word.split('').reverse().join('');
}

Given('a word {string}', function (word) {
  this.word = word;
});

When('I check if it is a palindrome', function () {
  this.result = isPalindrome(this.word);
});

Then('the result should be {string}', function (expectedResult) {
  assert.equal(this.result, (expectedResult === 'true'));
  