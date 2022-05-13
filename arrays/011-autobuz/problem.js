/*
    Esti soferul unui microbuz,
    capacitatea maxima a microbuzului este de 3 pasageri.
    In functie de numarul persoanelor care se urca in microbuz 
    trebuie sa afisezi unul dintre urmatoarele mesaje. (persoane in ordinea asta 'Maria', 'Marcel', 'Ion', 'Vasile')

    INPUT
        beforeStartingTheBus();
    OUTPUT
        Nu plec, nu s-a urcat nimeni!
    OUTPUT  
        S-a urcat Maria si Marcel, dar autobuzul nu este plin.
    OUTPUT  
        S-a urcat Maria, Darius si Marcel
    OUTPUT  
        Nu plec, e prea plin autobuzul!
*/

const persons = [];

beforeStartingTheBus(persons);

function beforeStartingTheBus(persons) {
  return '';
}

module.exports = { beforeStartingTheBus };
