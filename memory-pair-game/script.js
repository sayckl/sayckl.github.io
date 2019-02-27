let targets = [];
let cardsArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg"];
const array = cardsArray;
const cards = document.querySelector('.cards');

cards.addEventListener('click', function(event) {
  const target = event.target;
  target.classList.add('opened');
  });

cardsArray.sort(function() { return 0.5 - Math.random() });

array.forEach(function(elem) {
  const div = document.createElement('div');
  div.className = 'front';
  div.dataset.cardId = elem;
  div.innerHTML = '<img src=' + elem + '>';

  const card = document.createElement('div');
  card.className = 'card';
  card.appendChild(div);

  const dom = document.querySelector('.cards');
  dom.appendChild(card);
});

cards.addEventListener('click', ({ target }) => {
  const openedCards = Array.from(cards.querySelectorAll('.front.opened'));

  if (openedCards.length === 2) {
    const [firstCard, secondCard] = openedCards;
console.log(openedCards.map(card => card.dataset.cardId));
 if (openedCards[0].dataset.cardId === openedCards[1].dataset.cardId) {
  setTimeout(() => {
    firstCard.classList.add('checked');
    secondCard.classList.add('checked');
  }, 500);
}
  setTimeout(() => {
    openedCards[0].classList.remove('opened');
    openedCards[1].classList.remove('opened');
  }, 500);

  }
  if (cards.querySelectorAll('.front.checked').length === 16){
    alert('ну ты и поц!');
  }
});
