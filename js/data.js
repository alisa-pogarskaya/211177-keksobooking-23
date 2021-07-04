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
    .map((e)=>({order:Math.random(), e}))
    .sort((a,b)=>a.order-b.order)
    .map((e)=>e.e).slice(0,count));
};

const getRandomItem = (arr) => {
  const ix = getRandomFloat(0, arr.length-1);
  return arr[ix];
};

const getMany = (arr,count) => Array(count).fill(null).map(() => getRandomItem(arr));

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

const generateAuthor = () => ({
  avatar: `img/avatars/user${getRandomItem(avatarPool)}.png`,
});

const generateLocation = () => ({
  lat: getRandomFloat(35.65000, 35.70000, 1),
  lng: getRandomFloat(139.70000, 139.80000, 1),
});

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
