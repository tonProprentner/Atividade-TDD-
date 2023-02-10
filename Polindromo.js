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

Then ('the result should be {string}', function (expectedResult)
{
  assert.equal(this.result,(expectedResult === 'true'));
});

