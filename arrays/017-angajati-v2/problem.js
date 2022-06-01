/*
    Aveti acest string

    id,fullName,age,country,isActive
    1,Sorin Y,31,Romania,2
    2,Ioana D,22,Romania,1
    3,Marius F,34,Romania,0
    4,Mitica G,11,Romania,1 
    5,Paul R,21,Romania,0
    6,Stefan I,41,Romania,0

    Vreau sa faceti urmatoarele. Pentru fiecare pas o functie

    Pasul 1. Spargeti string-ul pe linii separate, il transformati in array.
    Pasul 2. Pastrati primul rand, il spargeti string-ul intr-un array de string-uri.
    Pasul 3. Parcurgeti restul randurilor. La fiecare rand, care e un string, il spargeti intr-un array de string-uri.
    Pasul 4. Pentru fiecare RAND de la pasul 3, il transformati intr-un obiect. KEY-ul va fi Pasul 2, VALUE-ul va fi Pasul 3 de la fiecare rand

    EX.
    Dupa Pasul 2. O sa ramaneti cu un array de genul [ 'id','fullName','age','country','isActive' ] (reprezinta keys ale obiectului ce il veti crea)
    Dupa Pasul 3. O sa ramaneti cu un array de genul (pentru fiecare rand) ['1','Sorin Y','31','Romania','2'] (reprezinta values ale obiectului ce il veti crea)

    Iar acum la Pasul 4, o sa luati fiecare pereche de KEY si VALUE din cele 2 array-uri de mai sus si formati un obiect.
    Acel obiect il adaugati intr-un array de employees.

    Dupa ce am completat pasii de mai sus, vom ramane cu.
        a. [ 'id','fullName','age','country','isActive' ] , ce le vom folosi sa ne construim obiecte
        b. Un array de obiecte de angajati , construite la pasul 4
    
    Pasul 5. Faceti o functie cu care puteti updata un employee ---> updateEmployee(employeeId, employee) {} 
    parametrul acela employee, poate sa aiba cateva parti (nu neaparat toate, din obiect)

    Ex. employee = {
        id: 3,
        fullName: 'Mariusica R'
    }

    sau

     employee = {
        id: 4,
        age: 12,
        isActive: 0
    }


    Pasul 6. faceti o functie cu care sa stergeti un employee ---> deleteEmployee(employeeId){}

    Pasul 7. La final mai vreau o functie care sa ia capetele de tabel si lista de employees sa o transformati pe toata inapoi in string(cum a fost la inceput) 
    id,fullName,age,country,isActive
    1,Sorin Y,31,Romania,2
    2,Ramona D,24,Romania,1
    3,Marius F,34,Romania,0
    4,Mitica G,11,Romania,1
    5,Paul R,21,Romania,0
    6,Stefan I,41,Romania,0

    Singura diferenta e ca, daca ati adaugat / modificat / sters vreun employee sa fie afectat in acest rezultat.
*/

const content = `id,fullName,age,country,isActive
1,Sorin Y,31,Romania,2
2,Ioana D,22,Romania,1
3,Marius F,34,Romania,0
4,Mitica G,11,Romania,1
5,Paul R,21,Romania,0
6,Stefan I,41,Romania,0`;

const objectKeys = [];
const employees = [];
