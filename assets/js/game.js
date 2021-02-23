var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

var fight = function(enemyName) {

if(playerHealth > 0) {
    // letplayer know what round they are in, remeber that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators!"  + ( i + 1 ) );
    
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

     // reset enemyHealth before starting new fight
     enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }

}
    
    while(enemyHealth > 0 && playerHealth > 0) {

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choses to skip and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}

// Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack

// Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    // award player money for winning
    playerMoney = playerMoney + 20;

    // leave while() loop since enemy is dead
    break;
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack

// Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <=0) {
    window.alert(playerName + " has died!");
    // leave while() loop if player is dead
    break;
}   else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }
};



// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {





    // if no (false), ask question again by running fight() again
    else {
        fight();
    }

    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try again!");
}




};
}
// fight();

for (var i = 0; i < enemyNames.length; i++) {
   var pickedEnemyName = enemyNames[i];
   enemyHealth = 50
   fight(pickedEnemyName);
}