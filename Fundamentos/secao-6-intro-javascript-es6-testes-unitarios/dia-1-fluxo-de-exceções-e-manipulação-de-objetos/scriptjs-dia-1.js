// Primeira parte
const showPromo = (name, number) => {
    const firstText = document.querySelector('#text-initial');
    const secondText = document.querySelector('#text-final');
    
    try {
      checkName(name);
      checkNumber(parseInt(number));
      const productObject = checkPromo(number);
  
      firstText.innerHTML = `Boas-vindas, ${name}!`;
      secondText.innerHTML = `A promoção do dia é: 
        ${productObject.product} no valor de R$ ${productObject.price}`;
    } catch(err) {
      secondText.innerHTML = err.message;
    }
  }

  const checkName = (name) => {
    let letters = /[aA-zZ]+/;
    
    if (!name.match(letters)) {
      throw new Error('É necessário digitar um nome válido');
    }
  }

  const button = document.querySelector('#send-button');

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = document.querySelector('#number-id').value;

  showPromo(name, number);
});

const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
  const productObject = checkNumber(parseInt(number));

  firstText.innerHTML = `Boas-vindas, ${name}!`;
  secondText.innerHTML = `A promoção do dia é: 
    ${productObject.product} no valor de R$ ${productObject.price}`;
}

// Segunda parte
const checkNumber = (number) => {
    if (isNaN(number)) {
      throw new Error('É necessário digitar um número');
    }
  }

  // Terceira parte
const checkPromo = (number) => {
    for (let index = 0; index < promo.length; index += 1) {
      if (number - 1 === index) {
        return promo[index];
      }
    }
  }

  const showPromo = (name, number) => {
    const firstText = document.querySelector('#text-initial');
    const secondText = document.querySelector('#text-final');
    
    try {
      checkName(name);
      checkNumber(parseInt(number));
      checkValidRange(number);
      const productObject = checkPromo(number);
  
      firstText.innerHTML = `Boas-vindas, ${name}!`;
      secondText.innerHTML = `A promoção do dia é: 
        ${productObject.product} no valor de R$ ${productObject.price}`;
    } catch(err) {
      secondText.innerHTML = err.message;
    } finally {
    document.querySelector('#name-id').value = "";
    document.querySelector('#number-id').value = "";
    }
  }