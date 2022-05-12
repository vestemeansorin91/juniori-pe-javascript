/*
	Sunt 5 jucatori la o masa de poker, le stim varstele (nu conteaza ordinea) [16, 15, 19, 14, 18].
	Vreau sa descopar cine e cel mai tanar. Afiseaza-i varsta in consola.

	INPUT [16, 15, 19, 14, 18]
	OUTPUT Cel mai tanar are 14 ani

	INPUT [16, 14, 17, 19, 11]
	OUTPUT Cel mai tanar are 14 ani

    BONUS.
        Afiseaza si cel mai batran jucator. 
*/

const input1 = [16, 15, 19, 14, 18];
const input2 = [16, 14, 17, 19, 11];

function detectYoungestPlayer(arr) {
  let minimumAge = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minimumAge > arr[i]) {
      minimumAge = arr[i];
    }
  }
  return 'Cel mai tanar are ' + minimumAge + ' ani';
}

function detectOldestPlayer(arr) {
  let maximumAge = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maximumAge < arr[i]) {
      maximumAge = arr[i];
    }
  }
  return 'Cel mai batran are ' + maximumAge + ' ani';
}

module.exports = { detectYoungestPlayer, detectOldestPlayer, input1, input2 };
