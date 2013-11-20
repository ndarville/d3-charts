// LINKS
// * http://www.matematiksider.dk/mandatfordelinger.html

// CONFIG

/**
    Denmark's mandate calculation:
        4:   Chosen overseas
        135: D'Hondt
        40:  Sainte-League

    mandates = dHondt(votes, 135) + sainteLeague(votes, 40);
*/

var partyAmount = null, // 12 --- for each row where vote share is above threshold
    seatAmount = null, // 179
    population = null, // 5000000
    threshold = null, // in per cent; e.g. 2
    columns = function(seatAmount) {}; // find more optimal value than seatAmount

// STEPS

/** 1
// D'Hondt
Create a table with
    * a header row and {{ partyAmount }} rows
    * a party-name and vote-amount column and {{ seatAmount }} columns

 Party | Votes |   1   |   2   |   3   | ... |   seatAmount
-------|-------|-------|-------|-------|-----|---------------
   A   |  v_A  | v_A/1 | v_A/2 | v_A/3 | ... | v_A/seatAmount
   B   |  v_B  | v_B/1 | v_B/2 | v_B/3 | ... | v_B/seatAmount
   C   |  v_C  | v_C/1 | v_C/2 | v_C/3 | ... | v_C/seatAmount

// Saine-League
Create a table with
    * (...)
    * (...) and {{ seatAmount }}/2 columns of uneven numbers

 Party | Votes |   1   |   3   |   5   | ... |   seatAmount.uneven
-------|-------|-------|-------|-------|-----|----------------------
   A   |  v_A  | v_A/1 | v_A/3 | v_A/3 | ... | v_A/seatAmount.uneven
   B   |  v_B  | v_B/1 | v_B/3 | v_B/3 | ... | v_B/seatAmount.uneven
   C   |  v_C  | v_C/1 | v_C/3 | v_C/3 | ... | v_C/seatAmount.uneven
*/

/** 2
Pick the {{ partyAmount }} largest values

 Party | Votes |    1   |    2   |   3   | ... |   seatAmount
-------|-------|--------|--------|-------|-----|---------------
   A   |  v_A  | *v_A/1 | *v_A/2 | v_A/3 | ... | v_A/seatAmount
   B   |  v_B  | *v_B/1 |  v_B/2 | v_B/3 | ... | v_B/seatAmount
   C   |  v_C  |  v_C/1 |  v_C/2 | v_C/3 | ... | v_C/seatAmount

*/

/** 3
Summary:
    Party A: 2 mandates for #1 + #2
    Party B: 1 mandate_ for #1
    Party C: 0 mandates

 Party | Votes | 1 | 2
-------|-------|---|---
   A   |  v_A  | 1 | 1
   B   |  v_B  | 1 | 0
   C   |  v_C  | 0 | 0
*/
