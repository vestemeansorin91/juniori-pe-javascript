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

const players = [16, 15, 19, 14, 13, 18];
//  0.   1.  2.  3.  4

console.log(findTheYoungestPlayer(players));

function findTheYoungestPlayer(arr) {
  let youngest = arr[0]; // 14

  for (let i = 1; i < arr.length; i++) {
    if (youngest > arr[i]) {
      youngest = arr[i];
    }
  }

  return `Cel mai tanar are ${youngest} ani`;
}

/* - - - - - - - - - - - - - - - - - */
const players2 = [16, 15, 19, 14, 13, 18];

console.log(findTheOldestPlayer(players));

function findTheOldestPlayer(arr) {
  let oldest = arr[0]; // 16

  for (let i = 1; i < arr.length; i++) {
    if (oldest < arr[i]) {
      oldest = arr[i];
    }
  }

  return `Cel mai batran are ${oldest} ani`;
}

/*
	Intr-un sat locuiesc doar 10 persoane, unele vor sa se vaccineze altele nu (RANDOM).
	Afiseaza in consola astfel.
	INPUT ['Marius', 'Denis', 'Maria', 'Gheorghe', 'Paul', 'Ana', 'Cristina', 'Ionut', 'Sorin', 'Mircea']
	OUTPUT
		Marius NU S-A VACCINAT!
		Denis NU S-A VACCINAT!
		Maria S-A VACCINAT!
		Gheorghe S-A VACCINAT!
		Paul S-A VACCINAT!
		Ana S-A VACCINAT!
		Cristina S-A VACCINAT!
		Ionut NU S-A VACCINAT!
		Sorin NU S-A VACCINAT!
		Mircea S-A VACCINAT!
	
	BONUS*: Pe langa mesajele de mai sus, sa afisam si numarul celor vaccinati si nevaccinati
		VACCINATI 6
		NEVACCINATI 4
*/

const people = [
  'Marius',
  'Denis',
  'Maria',
  'Gheorghe',
  'Paul',
  'Ana',
  'Cristina',
  'Ionut',
  'Sorin',
  'Mircea'
];

console.log(findVaccinatedPeopleStatus(people));

function findVaccinatedPeopleStatus(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    const isVaccinated = !!Math.floor(Math.random() * 2);
    let isVaccinatedText = ' S-A VACCINAT!';

    if (!isVaccinated) {
      isVaccinatedText = ' NU' + isVaccinatedText;
    }

    result += arr[i] + isVaccinatedText + '\n';
  }

  return result;
}

/*
    Esti in excursie si ai o baterie externa la tine care are capacitatea de 9.000 mAh.
    
    Toti aveti iPhone 11, care are capacitatea de 2100 mAh. 
    Cand va intoarceti din excursie va puneti pe rand la incarcat, telefoanele complet descarcate.

    const persons = ['Sorin', 'Georgeta', 'Doru', 'Nicu', 'Ioana', 'Mirel', 'Darius'];

    INPUT
        chargePhones(persons);
    OUTPUT
        Sorin incarcat complet!
        Georgeta incarcat complet!
        Doru incarcat complet!
        Nicu incarcat complet!
        Ioana incarcat pana la 28.57%;
        Mirel nu ti-ai incarcat deloc telefonul!
        Darius nu ti-ai incarcat deloc telefonul!
*/

persons = ['Sorin', 'Georgeta', 'Doru', 'Nicu', 'Ioana', 'Mirel', 'Darius'];

const mesajInConsola = chargePhones(persons);

console.log(mesajInConsola);

function chargePhones(arr) {
  let result = '';
  let batteryCapacity = 9000;
  let iphoneFullCharge = 3800;

  for (let i = 0; i < arr.length; i++) {
    let message = ' incarcat complet!';

    /* I can charge a phone full ?*/
    if (batteryCapacity - iphoneFullCharge > 0) {
      batteryCapacity = batteryCapacity - iphoneFullCharge;
    } else if (batteryCapacity > 0) {
      const calculatePercent = ((batteryCapacity * 100) / iphoneFullCharge).toFixed(2);

      message = ' incarcat pana la ' + calculatePercent + '%';
      batteryCapacity = 0;
    } else {
      message = ' nu ti-ai incarcat deloc telefonul!';
    }

    result += arr[i] + message + '\n';
  }

  return result;
}
