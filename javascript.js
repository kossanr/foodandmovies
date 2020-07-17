let food = [
  "Grand Catch",
  "Buludo",
  "i.e",
  "Olive & Lamb",
  "Nicos Tacos",
  "Nolos Kitchen",
];

function newQuestion() {
  let randomNumber = Math.floor(Math.random() * food.length);

  document.getElementById("foodDisplay").innerHTML = food[randomNumber];
}

let movie = [
  "October sky",
  "Flowers of war",
  "Pulp Fiction",
  "No country for old men",
  "Roma",
  "Mid 90s",
  "Everything is illuminated",
  "The birds",
  "Requiem for a dream",
  "Secondhand lions",
  "Only god forgives",
  "Noah",
  "I lost my body",
  "Moonlight ",
  "The notebook ",
  "Take shelter",
  "Green street hooligans ",
  "The signal ",
  "The pianist ",
  "Zero dark thirty ",
  "Death of Stalin ",
  "Dirty dancing ",
  "Boy in striped pjs ",
  "A beautiful life ",
  "The big  Lebowski",
  "Nemo ",
  "Shrek ",
  "Up ",
  "Wall-e",
  "Don’t worry, he won’t get far in foot ",
  "We need to talk about Kevin ",
  "Marriage story ",
  "Titanic ",
  "Cinderella Man ",
  "Buffalo 66",
];

function newSuggestion() {
  let randomNumber = Math.floor(Math.random() * movie.length);

  document.getElementById("movieDisplay").innerHTML = movie[randomNumber];
}
