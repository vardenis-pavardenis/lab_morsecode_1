import beep from 'beep'
import sleep from 'sleep'

/**
 * vykdoma funkcija generuoja tasko signala
 * @returns {undefined}
 */
const f_generuoti_signala_taskas = function ()
{
    // .
    // Taško (ang. dot) trukmė yra 1 laiko vienetas.
    beep(200)
    // Tylos laikotarpis po kiekvieno taško ar brūkšnio signalo yra 1 laiko vienetas.
    sleep(200)
}

/**
 * vykdoma funkcija generuoja brūkšnio signala
 * @returns {undefined}
 */
const f_generuoti_signala_bruksnys = function ()
{
    // -
    // Brūkšnio (ang. dash) trukmė yra 3 laiko vienetai.
    beep(600)
    // Tylos laikotarpis po kiekvieno taško ar brūkšnio signalo yra 1 laiko vienetas.
    sleep(200)
}

//
// S (...)
//

f_generuoti_signala_taskas()

f_generuoti_signala_taskas()

f_generuoti_signala_taskas()

// 
// Papildomas tylos laikotarpis po paskutinio sekos elemento 2 laiko vienetai.
sleep(400)

//
// O (---)
//

f_generuoti_signala_bruksnys()

f_generuoti_signala_bruksnys()

f_generuoti_signala_bruksnys()

// 
// Papildomas tylos laikotarpis po paskutinio sekos elemento 2 laiko vienetai.
sleep(400)