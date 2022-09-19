Feature: Olá Mundo

Scenario: Display the sentence 'Olá mundo'
  Given I start with 'Olá'
  When I add 'mundo'
  Then I end up with 'Olá mundo'