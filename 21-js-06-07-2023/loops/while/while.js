

// if ()
let count = 0;

while (count < 10) {
  console.log('Run while', count);
  count++;
}

// Pana la 5
while (count < 10) {

  if (count === 5) break;
  console.log('Run while', count);
  count++;
}


// Omite 5
while (count < 10) {
  count++;
  if (count === 5) continue;
  console.log('Run while', count);
}

let countDo = 0;
do {
  console.log('Yey');
  countDo++;
} while(countDo < 2)


``
// 1. Scrieți un program care sa afișeze în consola, toate numerele divizibile cu 5 pana la 100. (For loop)
// 2. Faceți o funcție căruia sa puteți sa ii pasați o variabila (parametru a funcției, numarMaxim) astfel încăt sa puteți afișa toate numerele divizibile cu 5 pana la numărul pe care îl adăugăm ca și argument. (O îmbunătățire a primului. exercitiu)  (For loop)
// 3. Creati un program care sa calculeze factoialul unui număr  = 13  (For loop)
// 4. Creeati o functie care sa primeasca input un numar ca si variabila, iar rezultatul sa fie factorialul acelui numar. (Strans legata de ex.3)  (For loop)
// 5, Creati un program care sa va o valoare input (prompt), de tip string, adica un cuvant. Daca cuvantul este o variabila = ex: 'Bingo', si utlizatorul introduce corect cuvantul in prompt, programul sa se opreasca si sa se afiseze in consola 'Ai nimerit'. Daca cuvantul nu este cel corect va apara un nou prompt cu mesajul ('Nu ai nimerit, mai incearca'). Daca nu nimeresti in 10 incercari, sa se incheie programul si sa se afiseze in consola 'Macar ai incercat' (while, do while)
// bonus
// 6. Faceti o matrice (loop in loop) care sa creeze un text de forma   (poate fi si patrat, dar sa fie gol pe dinauntru). Nu luati in considerare spatiul vertical, in pagina ar trebui sa fie destul de unite.     10 x 10 ( interiorul sa fie gol), doar marginea sa apara
// *********.   
// *	    *		 
// *	    *
// *********
// 6.a bonus bonus, Sa faceti o functie care primeasca si o variabila de n x n (n = nr lungime) ex fn(20).  sa fie matricea 20 x 20. 