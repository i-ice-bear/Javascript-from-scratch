const records = {
  math: 32,
  looop: 324,
  something: 321,
  aurora: 98,
};

//* for loop
for (let i = 0; i < Object.keys(records).length; i++) {
  console.log(
    Object.keys(records)[i] + " : " + records[Object.keys(records)[i]]
  );
}

//+ for in looop

for (const i in records) {
  if (Object.hasOwnProperty.call(records, i)) {
    console.log(i + " : " + records[i]);
  } else {
    console.log("Not found");
  }
}

//* mean return from function

const meanFunction = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
console.log(meanFunction(1, 2, 3, 4, 5));
