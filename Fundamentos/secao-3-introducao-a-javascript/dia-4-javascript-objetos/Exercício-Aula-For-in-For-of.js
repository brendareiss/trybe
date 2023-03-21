let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let name in names) {
    console.log('Olá,' + " " + names[name]);
  }

  // porque quando eu peço "name" dentro da let names ele sabe que é o nome que eu quero? e não "person"?

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car){
    console.log(key + ":" + car[key]);
  }
  