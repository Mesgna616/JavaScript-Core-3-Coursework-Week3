const personOne = {
  firstName: "Popeye",
  age: 34,
  favoriteFood: "Spinach",
};

function introduceYourself(personOne) {
  let {firstName ,age ,favoriteFood: favoriteFood} = personOne
  console.log(
    `Hello, my name is ${firstName}. I am ${age} years old and my favourite food is ${favoriteFood}.`
  );
}

introduceYourself(personOne);
