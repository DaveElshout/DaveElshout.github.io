const allGrades = [7, 6.8, 6];
//10, 10,10,10,5.5,10,10,9, 8,7,6,5.5,8,6,7,5.5

function injectGrades() {
  for (let i = 0; i < allGrades.length; i++) {
    document.getElementById(`grade${i}`).innerHTML = allGrades[i];
  }
}

function progressBarLogic() {
  const ec = [2.5, 7.5, 5, 10, 2.5, 5, 5, 2.5, 2.5, 5, 5, 2.5, 2.5, 2.5];
  let q = 0;
  let ecCount = [];

  for (let c = 0; c < allGrades.length; c++) {
    if (c === 4 || c === 9 || c === 13) {
      console.log("went into combined grade loop");
      if (c === 4 && allGrades[4] >= 5.5 && allGrades[5] >= 5.5) {
        console.log("grade 4/5 triggered");
        c++;
        ecCount.push(ec[q]);
        q++;
      } else if (c === 9 && allGrades[9] >= 5.5 && allGrades[10] >= 5.5) {
        console.log("grade 9/10 triggered");
        c++;
        ecCount.push(ec[q]);
        q++;
      } else if (c === 13 && allGrades[13] >= 5.5 && allGrades[14] >= 5.5) {
        console.log("grade 13/14 triggered");
        c++;
        ecCount.push(ec[q]);
        q++;
      } else {
        console.log(
          c,
          "it is a double grade but it didn't meet the requirements."
        );
        c++;
        q++;
      }
    } else if (allGrades[c] >= 5.5) {
      console.log(c, "is above 5.5");
      ecCount.push(ec[q]);
      q++;
    } else {
      console.log(c, "is under 5.5");
      q++;
    }
    console.log(q, "q went up by 1");
  }
  const sum = ecCount.reduce(add, 0); // with initial value to avoid when the array is empty

  function add(accumulator, a) {
    return accumulator + a;
  }

  console.log(sum, "total EC");
  let nbsa = (sum / 45) * 100;
  let propedeuseVoortgang = (sum / 60) * 100;

  document.getElementById("aantalEC").style.width = `${nbsa}%`;
  console.log(`${Math.round(nbsa)}% NBSA voortgang`);
  if (sum < 45) {
    document.getElementById("aantalEC").innerHTML = `${sum}EC`;
  } else {
    document.getElementById("aantalEC").innerHTML = `${45}EC`;
  }

  console.log(`${Math.round(propedeuseVoortgang)}% prop Voortgang `);
  document.getElementById(
    "aantalEcPropedeuse"
  ).style.width = `${propedeuseVoortgang}%`;
  document.getElementById("aantalEcPropedeuse").innerHTML = `${sum}EC`;
}
injectGrades();
progressBarLogic();


/**
 * make an array
 * numbers in array need to be looped through(for loop)
 * the numbers need to be individually placed in divs
 * accomplish with a counter which changes the name of the div with a number
 *
 * numbers need to be checked for above 5.5
 * if above 5.5 add (amount of ec) to counter
 *
 */
