// Задание 2.

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

// Задание 4.

const photoPool = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const descriptionsPool = [
  'Милое уютное помещение в центре Токио, сдается в аренду на длитльный срок',
  'Сдача в аренду на один месяц, гастарбайтеров не заселяем!',
  'Лофт квартира в стиле минимализм для одинокого мужчины в центре города',
  'Просторная трехконатная квартира для большой семьи',
  'Сдается комната в квартире. Соседи - двое взрослых мужчин. Подселяем только красивых девушек :)',
  'Сдается однокомная квартира для тихой женщины или мужчины на полгода.',
  'Студия в центре города. Дешево!',
  'Сдается в аренду двухконатная квартира в центре города Токио. Есть мебель, холодильник и стиральная машинка',
  'Сдам квартиру. Звоните на номер - +7 (909) 345 34 87 после 20:00',
];

const titlePool =[
  'Аренда на улице Самурайская',
  'ТЦ Токио Сити',
  'Аренда улица ранний Восход',
  'ул. Восточная',
  'Центральная площадь. Аренда',
  'Набережная Харакири',
  'Улица Восток-дело-Тонкое',
  'ТЦ "Суши"',
  'ТЦ Самурай Лютый',
  'ул. Моросящего Дождя',
];

const featuresPool = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const checkInOutPool = ['12:00', '13:00', '14:00'];
const typePool = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
// eslint-disable-next-line id-length
const avatarPool = Array(10).fill(null).map((_, ix) => `0${ix+1}`.slice(-2));

const getRandomFloat = (min, max, dec = 0) => {
  if (!Number.isFinite(min)) {
    throw new Error('min');
  }
  if (!Number.isFinite(max)) {
    throw new Error('max');
  }
  if (min >= max) {
    throw new Error('min > max');
  }
  if (min < 0) {
    throw new Error('min < 0');
  }
  if(!Number.isInteger(dec)){
    throw new Error('dec int');
  }
  if(dec < 0){
    throw new Error('dec negative');
  }
  if(dec > 10){
    throw new Error('dec > 10');
  }
  const factor = Math.pow(10, dec);
  const mi = min * factor;
  const ma = max * factor;
  const result = Math.round(Math.random() * (ma - mi) + mi) / factor;
  return result;
};

const getSubsetOf = (arr)=>{
  const count = getRandomFloat(0,arr.length);
  return (arr
    // eslint-disable-next-line id-length
    .map((e)=>({order:Math.random(), e}))
    // eslint-disable-next-line id-length
    .sort((a,b)=>a.order-b.order)
    // eslint-disable-next-line id-length
    .map((e)=>e.e).slice(0,count));
};

// eslint-disable-next-line arrow-body-style
const getMany = (arr,count) => {
  // eslint-disable-next-line no-use-before-define
  return Array(count).fill(null).map(() => getRandomItem(arr));
};

const getRandomItem = (arr) => {
  const ix = getRandomFloat(0, arr.length-1);
  return arr[ix];
};

const generateOfferDetails = (location) => {
  const checkinout = getRandomItem(checkInOutPool);
  return {
    title: getRandomItem(titlePool),
    address: `${location.lat}-${location.lng}`,
    price: getRandomFloat(80, 140),
    type: getRandomItem(typePool),
    rooms: getRandomFloat(1, 4),
    guests: getRandomFloat(1, 5),
    checkin: checkinout,
    checkout: checkinout,
    features: getSubsetOf(featuresPool),
    description: getRandomItem(descriptionsPool),
    photos: getMany(photoPool, getRandomFloat(3,8)),
  };
};

// eslint-disable-next-line arrow-body-style
const generateAuthor = () => {
  return {
    avatar: `img/avatars/user${getRandomItem(avatarPool)}.png`,
  };
};

// eslint-disable-next-line arrow-body-style
const generateLocation = () => {
  return {
    lat: getRandomFloat(35.65000, 35.70000, 1),
    lng: getRandomFloat(139.70000, 139.80000, 1),
  };
};

const generateMockOffer = () => {
  const location = generateLocation();
  return {
    author: generateAuthor(),
    offer: generateOfferDetails(location),
    location,
  };
};

const database = Array(10).fill(null).map(() => generateMockOffer());

// eslint-disable-next-line no-console
console.log(database);
