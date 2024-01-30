let productCards = document.querySelectorAll(".card--product");
let newsCards = document.querySelectorAll(".news--card");
let favoriteSvg = document.querySelectorAll(".favorite--add");

// Для каталога при наведении мыши

productCards.forEach(function(card) {
  card.addEventListener('mouseover', function () {
    card.classList.add('card--product--mousehover');
    console.log('класс добавлен');
  });

  card.addEventListener('mouseout', function() {
    card.classList.remove('card--product--mousehover');
    console.log('класс удален');
  });
});

// Обработчик событий при клике мышки

  productCards.forEach(function(card) {
    card.addEventListener('mousedown', function () {
      card.classList.add('card--product--mousedown');
      console.log('класс добавлен');
    });
    
    card.addEventListener('mouseup', function () {
      card.classList.remove('card--product--mousedown');
      console.log('класс удален');
    });

  });
// Для новостей

newsCards.forEach(function(news) {
  news.addEventListener('mouseover', function () {
    news.classList.add('news--card--mousehover');
    console.log('класс добавлен');
  });

  news.addEventListener('mouseout', function() {
    news.classList.remove('news--card--mousehover');
    console.log('класс удален');
  });
});

// Обработчик событий при клике мышки

newsCards.forEach(function(news) {
  news.addEventListener('mousedown', function () {
    news.classList.add('news--card--mousedown');
    console.log('класс добавлен');
  });

  news.addEventListener('mouseup', function() {
    news.classList.remove('news--card--mousedown');
    console.log('класс удален');
  });
});

// Анимация при добавлении товара в избранное

// favoriteSvg.addEventListener('mousedown', function(){
//   favoriteSvg.src
// });
