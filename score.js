
var score1 =0, score2 = 0;
var maxScore = 5;

function matchScoreCheck()
{
    // if player has 5 points
    if (score1 >= maxScore)
    {
        // stop the ball
        ballSpeed = 0;
        // write to the banner
        document.getElementById("scores").innerHTML = "Joueur 1 a gagné!";
        document.getElementById("winnerBoard").innerHTML = "Rafraîchir la page pour rejouer";
        // make paddle bounce up and down
        //bounceTime++;
        //paddle1.position.z = Math.sin(bounceTime * 0.1) * 10;
        // enlarge and squish paddle to emulate joy
        //paddle1.scale.z = 2 + Math.abs(Math.sin(bounceTime * 0.1)) * 10;
        //paddle1.scale.y = 2 + Math.abs(Math.sin(bounceTime * 0.05)) * 10;
    }
    // else if opponent has 7 points
    else if (score2 >= maxScore)
    {
        // stop the ball
        ballSpeed = 0;
        // write to the banner
        document.getElementById("scores").innerHTML = "Joueur 2 a gagné";
        document.getElementById("winnerBoard").innerHTML = "Rafraîchir la page pour rejouer";
        // make paddle bounce up and down
        //bounceTime++;
        //paddle2.position.z = Math.sin(bounceTime * 0.1) * 10;
        // enlarge and squish paddle to emulate joy
        //paddle2.scale.z = 2 + Math.abs(Math.sin(bounceTime * 0.1)) * 10;
        //paddle2.scale.y = 2 + Math.abs(Math.sin(bounceTime * 0.05)) * 10;
    }
}