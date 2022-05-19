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
const INTERVAL_DELAY = 500;

function goCarGo() {
  console.log('--------------🚗');
}

setInterval(goCarGo, INTERVAL_DELAY);
