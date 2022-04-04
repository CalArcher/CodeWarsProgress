# Rock Paper Scissors Lizard Spock

Created:  2022-04-03

[1]: https://www.codewars.com/kata/57d29ccda56edb4187000052/train/javascript
## [Kata link][1]

&nbsp;

## Question
---

&nbsp;

According to Sheldon Cooper the following is true:

Scissors cuts Paper

Paper covers Rock

Rock crushes Lizard

Lizard poisons Spock

Spock smashes Scissors

Scissors decapitates Lizard

Lizard eats Paper

Paper disproves Spock

Spock vaporizes Rock

( and as it always has ) Rock crushes Scissors

Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".



&nbsp;


## Note:
- Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".


&nbsp;




## Pseudo code:
- Take all pl1 and pl2 possible input combinations into if statement
- Make conditions for pl1 winning, conditions for draw, else pl2 win

&nbsp;

## **Solution:**

<!-- code below -->

```javascript

function rpsls(pl1, pl2) {
    if (pl1 === 'scissors' && pl2 === 'paper' 
    || pl1 === 'paper' && pl2 === 'rock' 
    || pl1 === 'rock' && pl2 === 'lizard' 
    || pl1 === 'lizard' && pl2 === 'spock' 
    || pl1 === 'spock' && pl2 === 'scissors' 
    || pl1 === 'scissors' && pl2 === 'lizard' 
    || pl1 === 'lizard' && pl2 === 'paper' 
    || pl1 === 'paper' && pl2 === 'spock' 
    || pl1 === 'spock' && pl2 === 'rock' 
    || pl1 === 'rock' && pl2 === 'scissors'){
        return 'Player 1 Won!'
    }else if (pl1 === pl2){
        return 'Draw!'
    }else{
        return 'Player 2 Won!'
    }
}

```

&nbsp;

## **Interesting Solutions:**

<!-- code below -->

```javascript

function rpsls(pl1,pl2){
  const list = 'rock paper scissors spock lizard'.split(' ');
  const offset = (list.indexOf(pl2) - list.indexOf(pl1) + 5) % 5;
  return offset === 0 ? 'Draw!' : (offset % 2 === 0 ? 'Player 1 Won!' : 'Player 2 Won!')
}

function rpsls(a,b){
  var win="ScissorsPaper PaperRock RockLizard LizardSpock SpockScissors ScissorsLizard LizardPaper PaperSpock SpockRock RockScissors".toLowerCase()
  return win.includes(a+b)?'Player 1 Won!':win.includes(b+a)?'Player 2 Won!':'Draw!'
}


```

&nbsp;

### Tags:
#codewars #100Devs #javascript