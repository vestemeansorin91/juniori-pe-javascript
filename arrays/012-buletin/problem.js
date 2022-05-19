/*
    Esti soferul unui microbuz,
    capacitatea maxima a microbuzului este de 3 pasageri.
    In functie de numarul persoanelor care se urca in microbuz 
    trebuie sa afisezi unul dintre urmatoarele mesaje. (persoane in ordinea asta 'Maria', 'Marcel', 'Ion', 'Vasile')

    INPUT
        beforeStartingTheBus();
    OUTPUT
*/
debugger;
let cnp = '1500116000000';

checkPerson(cnp);

function checkPerson(cnp) {
  /* Set gender */
  let gender = '';

  // let gender = cnp[0] === '1' ? 'baiat' : 'fata';

  if (cnp[0] === '1') {
    gender = 'baiat';
  } else {
    gender = 'fata';
  }

  /* Set day */
  let day = cnp[5] + cnp[6];

  /* Set month */
  let month = setMonthLabel(cnp[3] + cnp[4]);

  /* Set year */
  let year = cnp[1] + cnp[2];
  //   year = year >= 22 ? '19' + year : '20' + year;

  if (year >= 22) {
    year = '19' + year;
  } else {
    year = '20' + year;
  }

  console.log(`${gender} ${day} ${month} ${year}`);
}

function setMonthLabel(char1, char2) {
  let months = [
    'ianuarie',
    'februarie',
    'martie',
    'aprilie',
    'mai',
    'iunie',
    'iulie',
    'august',
    'septembrie',
    'octombrie',
    'noiembrie',
    'decembrie'
  ];
  return months[+(char1 + char2) - 1];
}
