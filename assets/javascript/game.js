
$(document).ready(function() {

  //*****************************************************************************
  //  Objects
  //*****************************************************************************

 //Constructor of an object called GameCharacter
  function GameCharacter( health, attackPower, counterAttackPwr ) {
    //characters attributes:: health, attack power, and counter attack power
    this.health = health;
    this.attackPower = attackPower;
    this.baseAttack = attackPower;
    this.counterAttackPwr = counterAttackPwr;

    //When a character attacks, his attack will increase by the initial attack power
    this.attackAction = function () {
      this.attackPower += this.baseAttack;
      return this.attackPower;
    }
  };

  // Character in the game -----------------
  var yoda = new GameCharacter( 200, 20, 20 );
  var darthMaul = new GameCharacter( 182, 15, 25 );
  var revan = new GameCharacter( 174, 20, 10 );
  var maceWindu = new GameCharacter( 162, 13, 22);

  console.log( yoda );  
  console.log( darthMaul );
  console.log( revan );
  console.log( maceWindu );  

  // holders for the player chosen character and who he chooses to battle
  var playerSelectedChar;
  var defendingChar;


  //*****************************************************************************
  //  Dom Manipulation
  //*****************************************************************************

 // Storing the HTML elements into variables--------------
  var mainSectionDiv = $( "#mainSection" );
  var choicesDiv = $( "#choices" );
  var allyDiv = $( "#ally" );
  var allyHeadingDiv = $( "#allyHeading" );
  var enemiesDiv = $( "#enemies" );
  var attackEnemyHeadingTag = $( "#attackEnemyHeading" );

  // text Elements not in the HTML-------------------------
  var characterOptionsText = $( "<h2>...Choose Your Ally Wisely...</h2>" );
  var allyChosen = $( "<h2>Your Ally</h2>" );

  // <img> Elements not in the HTML-------------------------
  var imgOfYoda = $( "<img id='imgOfYoda' src='assets/images/Yoda_5.png' class='character'>" )
  var imgOfDarthMaul = $( "<img id='imgOfDarthMaul' src='assets/images/DarthMaul.png' class='character'>" )
  var imgOfRevan = $( "<img id='imgOfRevan' src='assets/images/darthRevan5.png' class='character'>" )
  var imgOfMaceWindu = $( "<img id='imgOfMaceWindu' src='assets/images/MaceWindu.png' class='character'>"  ) 

  //*****************************************************************************
  //  Main
  //*****************************************************************************
  // Renders characters as choices for player to choose to play 
  function showPlayerChoices() {
    choicesDiv.append( characterOptionsText );
    choicesDiv.append( imgOfYoda );
    choicesDiv.append( imgOfDarthMaul );
    choicesDiv.append( imgOfRevan );
    choicesDiv.append( imgOfMaceWindu );  
  }

  // Renders after player chooses a character
  function renderAllyScreen( chosenAllyid ) {
    chosenAllyid.remove();
  }

  function  listen() {

  }

  // action after clicking start button
  $( "#mainSection" ).on( "click", ".btn", function() {
    showPlayerChoices();
  });

  $( "#mainSection" ).on( "click", ".character", function() {
    console.log("we made it" );
  });


});

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

  /*
  var gameCharacter = {
    //Characters Health
    health: null, 
    //Overall attack power
    attackPower: null,
    //using this to keep track of initial attack power
    baseAttack: null,
    //Counter used for enemy  
    counterAttackPwr: null,

    //Performing attacking increases 
    attackAction: function () {
      this.attackPower += this.baseAttack;
      return this.attackPower;
    }
  };
  */
