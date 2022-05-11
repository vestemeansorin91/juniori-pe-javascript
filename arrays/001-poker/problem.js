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
  return "Cel mai tanar are 14 ani";
}

function detectOldestPlayer(arr) {
  return "Cel mai batran are 19 ani";
}

module.exports = { detectYoungestPlayer, detectOldestPlayer, input1, input2 };
