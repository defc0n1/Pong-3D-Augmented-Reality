function ballPhysics() {
        // if ball goes off the 'left' side (Player's side)
        if (ball.position.y <= -fieldHeight/2) {
                // Player1 scores
                score1++;
                // update scoreboard HTML
                document.getElementById("score1").innerHTML = score1;
                // reset ball to center
		goBall = false;
                resetBall(2);
		//ballDirX = -ballDirX;
                matchScoreCheck();
        }
        // if ball goes off the 'right' side (CPU's side)
        if (ball.position.y >= fieldHeight/2) {       
                // Player2 scores
                score2++;
                // update scoreboard HTML
                document.getElementById("score2").innerHTML = score2;
                // reset ball to center
		goBall = false;
                resetBall(1);
		//ballDirX = -ballDirX;
                matchScoreCheck();
        }
        // if ball goes off the top side (side of table)
        if (ball.position.x <= -fieldWidth/2) {
                ballDirX = -ballDirX;
        }       
        // if ball goes off the bottom side (side of table)
        if (ball.position.x >= fieldWidth/2) {
                ballDirX = -ballDirX;
        }
        
        // update ball position over time
        ball.position.x += ballDirX * ballSpeed;
        ball.position.y += ballDirY * ballSpeed;
        
        // limit ball's y-speed to 2x the x-speed
        // this is so the ball doesn't speed from left to right super fast
        // keeps game playable for humans
        if (ballDirX > ballSpeed * 2) {
                ballDirX = ballSpeed * 2;
        }
        else if (ballDirX < -ballSpeed * 2) {
                ballDirX = -ballSpeed * 2;
        }
}

function resetBall(loser) {
        // position the ball in the center of the table
        ball.position.x = 0;
        ball.position.y = 0;

        // if player lost the last point, we send the ball to opponent
        if (loser == 1) {
                ballDirY = -1;
        }
        // else if opponent lost, we send ball to player
        else {
                ballDirY = 1;
        }

        // set the ball to move +ve in y plane (towards left from the camera)
        ballDirX = 1;
}

function paddlePhysics() {
	// if ball is aligned with paddle1 on x plane
	// remember the position is the CENTER of the object
	// we only check between the front and the middle of the paddle (one-way collision)
	if (ball.position.y <= raquette1.position.y + paddleHeight
	&& ball.position.y >= raquette1.position.y) {
		// and if ball is aligned with paddle1 on y plane
		if (ball.position.x <= raquette1.position.x + paddleWidth/2
		&& ball.position.x >= raquette1.position.x - paddleWidth/2) {
			// and if ball is travelling towards player (-ve direction)
			if (ballDirY < 0) {
				// stretch the paddle to indicate a hit
				raquette1.scale.x *=1.5;
				// switch direction of ball travel to create bounce
				ballDirY = -ballDirY;
				// we impact ball angle when hitting it
				// this is not realistic physics, just spices up the gameplay
				// allows you to 'slice' the ball to beat the opponent
				ballDirX -= raquette1DirY * 0.7;
			}
		}
	}

	// if ball is aligned with paddle2 on x plane
	// remember the position is the CENTER of the object
	// we only check between the front and the middle of the paddle (one-way collision)
	if (ball.position.y >= raquette2.position.y - paddleHeight
	&& ball.position.y <= raquette2.position.y) {
		// and if ball is aligned with paddle2 on y plane
		if (ball.position.x <= raquette2.position.x + paddleWidth/2
		&& ball.position.x >= raquette2.position.x - paddleWidth/2) {
			// and if ball is travelling towards opponent (+ve direction)
			if (ballDirY > 0) {
				// stretch the paddle to indicate a hit
				raquette2.scale.x *= 1.5;	
				// switch direction of ball travel to create bounce
				ballDirY = -ballDirY;
				// we impact ball angle when hitting it
				// this is not realistic physics, just spices up the gameplay
				// allows you to 'slice' the ball to beat the opponent
				ballDirX -= raquette2DirY * 0.7;
			}
		}
	}
}

