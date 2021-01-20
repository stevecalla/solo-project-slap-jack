# Title: SlapJack Card Game

A [Front-End Project](https://frontend.turing.io/projects/module-1/slapjack.html) by [Steve Calla](https://github.com/stevecalla)
* Project Manager: [Scott Ertmer](https://github.com/sertmer)

1. [Overview](#overview)
2. [Website Preview](#website-preview)
3. [Functionality](#functionality)
4. [Iterations](#iterations)
5. [Technologies](#technologies)
6. [Contributors](#contributors)
7. [Resources](#resources)

## Overview - SLAPJACK Card Game

Slapjack is a card game for 2 people and played with a 52 playing card deck. 

## OBJECT OF THE GAME
The goal is to win all the cards, by being first to slap each jack as it is played to the center.

## KEYBOARD CONTROLS
|            	| Deal 	| Slap 	|
|-----------:	|-----:	|-----:	|
| Player One 	|  Q/q 	|  P/q 	|
| Player Two 	|  F/f 	|  J/j 	|



## GAME PLAY
* Players alternate turns playing cards face-up into the central pile (ex a player can’t deal twice in a row)
  * Any player can slap at any time, with several outcomes!
   * If a player slaps when a Jack is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
   * If a player slaps when a Double or a pair (two cards of the same number - such as two Aces, or two Fives, or two Queens) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
   * If a player slaps when a Sandwich (two cards of the same number - such as two Aces, or two Fives, or two Queens, separated by a different card in the middle) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
   * If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.
  
## END GAME
  * If one player loses all their cards, they have one chance to not lose and continue the game:
  * The player with cards left continues to deal from their hand into the central pile (they are now allowed to deal multiple times in a row!)
  * If the player with cards left deals all their cards into the center without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed
  * When a Jack is revealed, the player who is out of cards can slap it. The central pile is then their new hand, the game continues as normal.
  * If however, the player who is out of cards slaps something that is not a Jack, or if the player who still has cards slaps the Jack first, then the player who is out of cards loses and the game is over!
  * Doubles and Sandwiches are not valid when one player is completely out of cards - in this case, only a Jack can save them!
  * The only way the player who still has cards can win is by slapping the Jack before the player without cards left does.

## Website Preview

<img width="1304" alt="Screen Shot 2021-01-19 at 8 35 39 PM" src="https://user-images.githubusercontent.com/72281855/105123806-fca17a00-5a95-11eb-8f0e-316e0053d924.png">

## Functionality

* Current:
  * User can select one of three types of activities (Study, Meditate, Exercise).
  * User can set a goal and an amount of time in minutes and seconds.
  * User will see an error message if no category is selected, if no description is entered, if no minutes OR seconds are entered, if minutes and seconds are both set to 0, if minutes OR seconds are set to letters or symbols (non-integers), if minutes are set beyond 1,440 (24 hours), or if seconds are set beyond 60.
  * If there are no data input errors, the user can start the countdown clock.
  * After the countdown clock reaches 0, the activity is marked complete and the user can log the activity.
  * Logging a completed activity will generate an activity card containing the user's activity info under the "Past Activities" header.
  * User can refresh page without losing their logged activity cards.

* Future Enhancements:
  * Styling and layout.
  * Mobile responsive.
  * Add start button and re-start game functionality.

* Known Issues/Bugs:
  * The games.js needs some significant refactoring to several functions.

## Iterations

 * ITERATION 0: Planned Out Game Play & End Game Scenarios.
 * ITERATION 1: Built a model of the game in test file.
 * ITERATION 2: Built html, css, main.js, game.js, player.js shell files.
 * ITERATION 3: Built game and end game play.
 * ITERATION 4: Built out keyboard control functionality, and related turn methods.
 * ITERATION 5: Built out basic page layout including HTML/CSS.
 * ITERATION 6: Enhanced page layout with box shawdows, fonts, alternating color indicator for turns.
 * ITERATION 7: Built local storage.
 * ITERATION 8: Refactored main.js.
 * ITERATION 9: Developed README file.

### IMAGES - GIPHY TO BE ADDED
  
## Technologies

1. HTML
2. CSS
3. JavaScript
4. Local Storage

## Contributors

* [Steve Calla](https://github.com/stevecalla)
* Project Manager: [Scott Ertmer](https://github.com/sertmer)
* Advice/Counsel from [Rachel Buchta](https://github.com/rachelbuchta)

## Resources
* Project Description: https://frontend.turing.io/projects/module-1/slapjack.html
* Team GitHub Repo: https://github.com/stevecalla/solo-project-slap-jack
* GitHub Hosted URL: No applicable; Private due to Turing requirements
* Project Board: https://github.com/stevecalla/solo-project-slap-jack/projects/2