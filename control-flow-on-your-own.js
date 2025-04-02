//1 temperature.
let temperature = 85;
if (temperature > 100) {
  console.log("Too hot!");
else if (temperature >= 60 && temperature <= 100) {
  console.log("Comfortable")
else {
  console.log("Too cold!");
}

//2 even number for a loop
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

//3 password attempts
let attempts = 0;
let success = false;
while (attempts < 3) {
  console.log("Attempt", attempts + 1);
  if (success) break;
  attempts++;
}

//4 fruit selector
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apples are $1");
    break;
  case "banana":
    console.log("Bananas are $0.50");
    break;
  case "orange":
    console.log("Oranges are $0.75");
    break;
  default:
    console.log("Fruit not available");
}

//5 loop with a skip and a stop
for (let i = 1; i <= 10; i++) {
  if (i === 4) continue;
  if (i === 7) break;
  console.log(i);
}
