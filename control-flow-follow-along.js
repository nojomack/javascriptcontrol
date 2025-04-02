// this is the else statements
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >=80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}

//this is #2 for loop
for (let i = 1; i <= 5; i++) {
  console.log('Iteration:", i);
  if (i % 2 === 0) {
    console.log("Even");
  }
}

//this is #3 while and do while
let count = 0;
while (count < 3) {
  console.log("While Count:", count);
  count++;
}

count = 0
do {
  console.log("Do...While Count:", count);
  count++;
} while (count < 3);

// #4 switch statement
let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Just another day");
}

//#5 break and continue
for (let i = 1; i <=5; i++) {
  if (i=== 3) continue;
  if(i === 5) break;
  console.log("Looping:", i);
}
