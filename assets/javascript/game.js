
//_____________________________________________________________________________
//  Global varriables
//=============================================================================


//_____________________________________________________________________________
//  Dom Manipulation
//=============================================================================


//_____________________________________________________________________________
//  Main
//=============================================================================



// 1st; i will need to make multiple characters with three attributes each 
//   (Maybe and object of data structure style to inherrit the attributes??)

// In the object :: need a function= Each time the player attacks, their 
//   character's Attack Power increases by its base Attack Power.

// might be able to do most of the functions in the objects


//upon opening page what do i want to see???
// Need to see four characters
//
// how do i want to start the game???
// "Choose your ally"  player will choose his character. Game will start once player clicks on chharacter image
//
// enemy character needs to have button option of attack 








/* 
##### Option 2 Game design notes

* Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 
  (12, 18, 24, 30 and so on).

* The enemy character only has `Counter Attack Power`. 

  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

* No characters in the game can heal or recover Health Points. 

  * A winning player must pick their characters wisely by first fighting an enemy with low 
  'Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies 
  before they lose all of their `Health Points`. Healing options would mess with this dynamic.

* Your players should be able to win and lose the game no matter what character they choose. 
The challenge should come from picking the right enemies, not choosing the strongest player.

*/