// Первая функция
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Подраздел "Получение случайного целого числа в заданном интервале, включительно"

function getRandomIntInclusive(min, max) {
  // "А также придумайте, как функция должна вести себя,
  // если передать значение «до» меньшее, чем значение «от», или равное ему"
  // Не знаю как правильно надо было сделать, пока сделала принудительный перевод в единицу
  if (min <= 0) {
    min = 1;
  }
  if (max <= 0) {
    max = 1;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(-10.12731263, 10.34273872);

// Вторая функция
// Источник: https://ru.stackoverflow.com/questions/1171234/%D0%9A%D0%B0%D0%BA-%D0%BE%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B8%D1%82%D1%8C-%D1%87%D0%B8%D1%81%D0%BB%D0%BE-%D0%B4%D0%BE-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0-%D0%BF%D0%BE%D1%81%D0%BB%D0%B5-%D0%B7%D0%B0%D0%BF%D1%8F%D1%82%D0%BE%D0%B9-%D0%B2-javascript

function getRandomInclusiveDecimal(min, max, decimalPlace) {
  if (min <= 0) {
    min = 1;
  }
  if (max <= 0) {
    max = 1;
  }
  min = min.toFixed(decimalPlace);
  max = max.toFixed(decimalPlace);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomInclusiveDecimal(-2.32732428348, 10.293737474, 3);
