function checkList() {
  const switchValue = prompt("Enter your switch value : ");

  switch (switchValue) {
    case "orange":
      alert("Current price of Oranges is 3.80$");
      break;
    case "papaya":
      alert("Current Price of papaya is 4.30$");
      break;
    case "dragon fruit":
      alert("Current price of dragon fruit is 20$");
    default:
      alert("We can't find the fruit name, Add a proper fruit!");
      break;
  }
}
