Feature: Palindrome verification

Scenario: Verify if a word is a palindrome
  Given a word "A man, a plan, a canal, Panama!"
  When I check if it is a palindrome
  Then the result should be true

Scenario: Verify if a word is not a palindrome
  Given a word "A car"
  When I check if it is a palindrome
  Then the result should be false