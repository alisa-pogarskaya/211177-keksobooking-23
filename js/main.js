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


// Генерация данных

const DATABASE = {
  author: {
    avatar: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], // строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
  },
  offer: {
    title: ['Шарлотка', 'Леонардо', 'Монплезир', 'Биг-мак', 'Шарлотка', 'Шарлотка', 'Шарлотка', 'Шарлотка', 'Шарлотка', 'Шарлотка'],
    address: [location.lat, location.lng],
    price: 3, // Случайное целое положительное число
    type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
    rooms: 1, // Случайное целое положительное число.
    guests: 1, // Случайное целое положительное число.
    checkin: ['12:00', '13:00', '14:00'],
    checkout: ['12:00', '13:00', '14:00'],
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'], // Значения не должны повторяться.
    description: 'Чудесное место, где можно отведать фирменную шарлотку на Парашутной',
    photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.'],
  },
  location: {
    lat: getRandomIntInclusive(35.65000, 35.70000),
    lng: getRandomIntInclusive(139.70000, 139.80000),
  },
};

const SIMILAR_WIZARD_COUNT = 10;

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createAdvert = () => ({
  // eslint-disable-next-line no-undef
  avatar: `img/avatars/user${ getRandomArrayElement(DATABASE.author.avatar) }.png`,
  title: getRandomArrayElement(DATABASE.offer.title),
  address: DATABASE.location,
  price: getRandomIntInclusive(0, 10000000),
  type: getRandomArrayElement(DATABASE.offer.type),
  rooms: getRandomIntInclusive(0, 500),
  guests: getRandomIntInclusive(0, 10000000),
  checkin: getRandomArrayElement(DATABASE.offer.checkin),
  checkout: getRandomArrayElement(DATABASE.offer.checkout),
  features: getRandomArrayElement(DATABASE.offer.features),
  description: DATABASE.offer.description,
  photos: getRandomArrayElement(DATABASE.offer.photos),
  location: DATABASE.location.lat + DATABASE.location.lng,
});

const similarWizards = new Array(SIMILAR_WIZARD_COUNT).fill(null).map(() => createAdvert());

// eslint-disable-next-line no-console
console.log(similarWizards);
