
$(document).ready(function() {

  //*****************************************************************************
  //  Objects
  //*****************************************************************************

 //Constructor of an object called GameCharacter
  function GameCharacter (health, attackPower, counterAttackPwr) {
    //characters attributes:: health, attack power, and counter attack power
    this.health = health;
    this.attackPower = attackPower;
    this.baseAttack = attackPower;
    this.counterAttackPwr = counterAttackPwr;

    //When a character attacks, his attack will increase by the initial attack power
    this.attackAction = function () {
      this.attackPower += this.baseAttack;
      //return this.attackPower;
    }
  };

  // Character in the game -----------------
  var yoda = new GameCharacter (200, 20, 20);
  var darthMaul = new GameCharacter (182, 15, 10);
  var revan = new GameCharacter (174, 20, 10);
  var maceWindu = new GameCharacter (162, 13, 22);


  // holders for the player chosen character and who he chooses to battle
  var ally;
  var enemy;
  var playerSelectedChar;
  var enemyChar;
  var wins = 0; 
  var gameStarted = false;
  var characterSelected = false;
  var enemySelected = false;


  //*****************************************************************************
  //  Dom Manipulation
  //*****************************************************************************

 // Storing the HTML elements into variables--------------
  var mainSectionDiv = $("#mainSection");
  var choicesDiv = $("#choices");
  var allyLabelDiv = $("#allyLabel");
  var defenderLabelDiv = $("#defenderLabel");
  var allyDiv = $("#ally");
  var defenderDiv = $("#defenderDiv");
  var allyHealthDiv = $("#allyHealth");
  var defenderHealthDiv = $("#defenderHealth");
  var attackButtonDiv = $("#attackButtonDiv");

  // text Elements not in the HTML-------------------------
  var characterOptionsText = $("<h2 id='charOptionsTxt'>...Choose Your Ally Wisely...</h2>");
  var allyChosenTxt = $("<h2>Your Ally</h2>");
  var enemySelectText = $("<h2 id='enemySelectTxt'>Choose Your Oponent</h2>");
  var enemyChosenTxt = $("<h2>Your Oponent</h2>");

  // <img> Elements not in the HTML-------------------------
  var imgOfYoda = $("<img id='imgOfYoda' src='assets/images/Yoda_5.png' class='character'>").css("width", 150);
  var imgOfDarthMaul = $("<img id='imgOfDarthMaul' src='assets/images/DarthMaul.png' class='character'>").css("width", 150);
  var imgOfRevan = $("<img id='imgOfRevan' src='assets/images/darthRevan5.png' class='character'>").css("width", 150);
  var imgOfMaceWindu = $("<img id='imgOfMaceWindu' src='assets/images/MaceWindu.png' class='character'>" ) .css("width", 150);

  // attack button -----------------------------------------
  var attackButton = $("<button id='attackButton' type='button' class='btn btn-danger d-flex justify-content-center align-middle'>Attack</button>");


  //*****************************************************************************
  //  Functions
  //*****************************************************************************
  // Renders characters as choices for player to choose to play ---
  function showPlayerChoices() {
    choicesDiv.append(characterOptionsText);
    choicesDiv.append(imgOfYoda);
    choicesDiv.append(imgOfDarthMaul);
    choicesDiv.append(imgOfRevan);
    choicesDiv.append(imgOfMaceWindu);  
  }

  // Renders after player chooses a character ----------------------
  function renderAllyScreen (chosenAlly) {
    // Removing the selected image from the choices 
    chosenAlly.remove();
    $("#charOptionsTxt").remove();
    
    allyLabelDiv.html(allyChosenTxt);

    //Rendering th img and health of selected ally
    switch (chosenAlly.attr("id")) {
      case "imgOfYoda":
        //append character here to ally div
        allyDiv.html(imgOfYoda);
        ally = yoda;
        allyHealthDiv.html(yoda.health);
        break;
    
      case "imgOfDarthMaul":
        allyDiv.html(imgOfDarthMaul);
        ally = darthMaul;
        allyHealthDiv.html(darthMaul.health);
        break;

      case "imgOfRevan":
        allyDiv.html(imgOfRevan);
        ally = revan;
        allyHealthDiv.html(revan.health);
        break;

      case "imgOfMaceWindu":
        allyDiv.html(imgOfMaceWindu);
        ally = maceWindu;
        allyHealthDiv.html(maceWindu.health);
        break;
    
      default:
        break;
    }  
    choicesDiv.append(enemySelectText);
    enemySelectScreen()
  }

  // Renders after player chooses the enemy --------------------------
  function renderEnemyScreen (enemyChar) {
    // Removing the selected enemy from the choices screen
    enemyChar.remove();
    enemySelectText.remove();

    defenderLabelDiv.html(enemyChosenTxt);

    //Rendering th img and health of selected enemy
    switch (enemyChar.attr("id")) {
      case "imgOfYoda":
        defenderDiv.html(imgOfYoda);
        enemy = yoda;
        defenderHealthDiv.html(yoda.health);
        break;
      
      case "imgOfDarthMaul":
        defenderDiv.html(imgOfDarthMaul);
        enemy = darthMaul;
        defenderHealthDiv.html(darthMaul.health);
        break;

      case "imgOfRevan":
        defenderDiv.html(imgOfRevan);
        enemy = revan;
        defenderHealthDiv.html(revan.health);
        break;

      case "imgOfMaceWindu":
        defenderDiv.html(imgOfMaceWindu);
        enemy = maceWindu;
        defenderHealthDiv.html(maceWindu.health);
        break;
    
      default:
        break;
    }
    attackButtonDiv.append(attackButton);
    attack();
  }

  // Action after clicking start button -----------------------------
  function startButton () {
    $("#mainSection").on("click", ".btn", function() {
      if (!gameStarted) {
        $(this).remove();
        gameStarted = true;
        console.log( gameStarted);
        showPlayerChoices();
        characterSelectScreen();
      }
    }); 
  }  

  // Action after clicking a character ------------------------------
  function characterSelectScreen() {
    $("#choicesSection").on("click", ".character", function() {
      if (!characterSelected) {
        characterSelected = true;
        // Assigning the selected character to playerSelectedChar
        playerSelectedChar = $(this);
        renderAllyScreen(playerSelectedChar);
      }
    });
  }

  // Action after clicking on an enemy ------------------------------
  function enemySelectScreen() {
    $("#choicesSection").on("click", ".character", function() {
      if (!enemySelected) {
        enemySelected = true;
        //Assigning the selected character to enemyChar
        enemyChar = $(this);
        renderEnemyScreen(enemyChar);
      }
    });
  }

  function attack() {
    $("#mainSection").on("click", ".btn", function() {
      
      if (enemy.health > -1 && ally.health > -1) {
        console.log("html second");
        // Attacking enemy health and updateing html health
        enemy.health -= ally.attackPower;
        defenderHealthDiv.html(enemy.health);
        // Running the attack function to increase attack power
        ally.attackAction();
        
        ally.health -= enemy.counterAttackPwr;
        allyHealthDiv.html(ally.health);
      }
      
      if (enemy.health <= 0) {
        defenderHealthDiv.html("0");
        wins++;
        enemySelected = false;
        choicesDiv.append(enemySelectText);
        enemySelectScreen();
      }

      if (ally.health <= 0) {
        allyHealthDiv.html("0");
        allyLabelDiv.html("...YOU LOSE...")
        setTimeout(function() {location.reload()}, 3000);
      }

      if (wins === 4) {
        $("#choicesSection").html("The Force is Strong in You");
        $("#mainSection").html("CONGRATS, You win");
      }
    });
  }

  
  //*****************************************************************************
  //  MAIN
  //*****************************************************************************

  startButton();
  
 
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
