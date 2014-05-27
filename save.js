	/*
		if(indexPlateau != 0) {
			var mark = markers[0];
			markers[0] = markers[indexPlateau];
			markers[indexPlateau] = mark;
		}a
*/

		/*for (i = 0; i < markersLength; i++){
			corners = markers[i].corners;
			//On centre le repère image et le repère caméra
			for (j = 0; j < corners.length; ++ j){
					corner = corners[j];
					corner.x = corner.x - (canvas.width / 2);
					corner.y = (canvas.height / 2) - corner.y;
			}

			//Si c est le Plateau
			if (i == indexPlateau) {
				pose = posit.pose(corners);
				rotation_inv = transpose(pose.bestRotation);
				translation_inv =multiplyMatrix(moins(rotation_inv), pose.bestTranslation);
				updateObject(plateau, pose.bestRotation, pose.bestTranslation);
			}
			//Si c est un cible raquette.
			else if (i == indexRaquette1) {
					//inverser matrice de rotation translation du plateau puis 
					// muttiplier t ou R de la raquette par la matrice inverdée calculée
					// donc on a la raquette dans le repère plateau
				pose = posit.pose(corners);
				updateObject(raquette1, multiplyMatrix(pose.bestRotation, rotation_inv), multiplyMatrix(pose.bestTranslation, translation_inv));
			}*/
			/*else {
				//On met à jour le terrain	
				pose = posit.pose(corners);
				updateObject(raquette2, pose.bestRotation, pose.bestTranslation);
			}*/


