// неиспользуемая переменная
// слишком длинная строка и let нафиг не нужен, подойдет const. Ну и зачем повторять каждый элемент по два раза если можно удвоить массив
const cardsArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg"];
 // в чем смысл новой переменной?
const cards = document.querySelector('.cards');

cards.addEventListener('click', function(event) { // ES6 arrow functions и зачем вообще, если ты внизу слушаешь тот же ивент
    const target = event.target; // ES6 destructurisation: const { target } = event; или даже сразу в аргументах функции
  target.classList.add('opened');
  });

cardsArray.sort(function() { return 0.5 - Math.random() }); // ES6 arrow functions и возврат значения без return

cardsArray.forEach(function(elem) { // ES6 arrow functions
  const div = document.createElement('div');
  div.className = 'front';
  div.dataset.cardId = elem;
  div.innerHTML = '<img src=' + elem + '>'; // ES6 string interpolation

  const card = document.createElement('div');
  card.className = 'card';
  card.appendChild(div);
 // у тебя есть нормальная переменная cards, зачем этот копипаст?
  cards.appendChild(card);
});

cards.addEventListener('click', ({ target }) => {
  const openedCards = Array.from(cards.querySelectorAll('.front.opened'));
// забавно, если успеть клацнуть на три карты до того как нижний setTimeout сработает, то можно открыть сразу все карты и они никогда не закроются МУХАХАХАХАХАХА
  if (openedCards.length === 2) {
    const [firstCard, secondCard] = openedCards;
console.log(openedCards.map(card => card.dataset.cardId)); // скобки вокруг одного аргумента, определись, юзаешь их или нет
 if (firstCard.dataset.cardId === secondCard.dataset.cardId) { // ты же на позапрошлой строке сделал переменные, зачем брать [0] и [1]
  setTimeout(() => {
    firstCard.classList.add('checked');
    secondCard.classList.add('checked');
    setTimeout(() => {
      if (cards.querySelectorAll('.front.checked').length === cardsArray.length){
      alert('ну ты и поц!');
    }
    }, 500);
  }, 500);
// это условие никогда не сработает, лишний else и checked будет не сразу, а как минимум через полсекунды, лучше перенести в setTimeout выше
// и магическое число 16, может просто взять cardsArray.length? Или править каждый раз когда изменим размер массива?
}
  setTimeout(() => {
    firstCard.classList.remove('opened'); // firstCard
    secondCard.classList.remove('opened'); // secondCard
  }, 500);

  }
});
