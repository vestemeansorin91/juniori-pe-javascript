/*
    setInterval, este o functie de tip timer.
    Ce face aceasta functie? 

    Primeste 2 parametrii, o functie si un interval.
    Acel interval poate sa fie de la 0 la infinit (nu pune zero ca iti blochezi calculatorul, este infinit loop-ul)
    
    Practic la fiecare 500milisecunde, ruleaza ce vezi in interiorul functiei goCarGo().
    Vreau sa animezi acea masina sa mearga de la dreapta la stanga, gen asa:
    --------------🚗
    -------------🚗-
    ------------🚗--
    -----------🚗---
    ----------🚗----
    ---------🚗-----
    --------🚗------
    -------🚗-------
    ------🚗--------
    -----🚗---------
    ----🚗----------
    ---🚗-----------
    --🚗------------
    -🚗-------------
    🚗--------------
    ----------------

    IMPORTANT: Vreau sa vad o singura linie in consola, nu alea 15 de mai sus. Bafta!
*/
const INTERVAL_DELAY = 50;
const road = [];

function goCarGo() {
  console.clear();
  const car = '🚗';

  if (road.length === 0) {
    /* Build road */
    for (let i = 0; i < 15; i++) {
      road.push('-');
    }

    /* Place the car in the array*/
    road[road.length - 1] = car;
  }

  /* Moving the car...*/
  const piece = road.shift();
  road.push(piece);

  console.log(road.join(''));
}

setInterval(goCarGo, INTERVAL_DELAY);
