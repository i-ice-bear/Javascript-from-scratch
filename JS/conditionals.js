function conditions() {
  const variables = prompt("Enter yor age : ");
  console.log(variables);
  const parsed = Number.parseInt(variables);
  if (parsed < 0) {
    console.log("invalid");
  } else if (parsed < 9) {
    console.log("You're kid");
  } else if (parsed < 18) {
    console.log("you're under 18");
  } else {
    console.log("You can drive");
  }
}
