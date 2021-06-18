const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'Animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'Animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'Animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'Animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'Animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'Animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'Animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'Animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'Vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'Vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'Vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'Vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'User',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'User',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'User',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'User',
      family: 'fas',
    },
];


//*mappa tutti gli elementi e li ritorna in un nuoco array aggiungendo il colore a seconda delle condizioni

const newIconsColored = icons.map((elements) => {

    let color = '#ab0501';
    if(elements.type == 'Animal'){
        color = '#007bf7';
    } else if (elements.type == 'Vegetable'){
        color = '#f7a73e';

    }

    return{
        ...elements,
        color
    }
})

//*stampa sull'html delle icone colorate

newIconsColored.forEach((elements) => {
    document.getElementById('riga').innerHTML += 
    `
        <div class="icon_box">
            <i class="${elements.family} ${elements.prefix}${elements.name}" style="color:${elements.color}"></i>
            <div class="title">${elements.name.toUpperCase()}</div>
        </div>
    `
});


//* creazione array che contenga solo il tipo
const tipo = [];

//*ciclo per inserire i singoli tipi solo una volta
newIconsColored.forEach((elements) => {

  if(!tipo.includes(elements.type)){
    tipo.push(elements.type)
  }
});


//*ciclo per stampare i tipi su html
tipo.forEach((elements) => {

  document.getElementById('tipo').innerHTML += 
  `<option value="${elements}">${elements}</option>`
});




const select = document.getElementById('tipo');

//*facciamo in modo che a seconda del valore che selezioniamo dalla tendina appaiano solamente le icone con quella proprietà

select.addEventListener('change', function(){
  const iconsFilter = newIconsColored.filter((element) => {
    return element.type == select.value;
  });

  document.getElementById('riga').innerHTML = '';

  iconsFilter.forEach((elements) => {

    document.getElementById('riga').innerHTML += 
    `
        <div class="icon_box">
            <i class="${elements.family} ${elements.prefix}${elements.name}" style="color:${elements.color}"></i>
            <div class="title">${elements.name.toUpperCase()}</div>
        </div>
    `
  });

  if(select.value == 'all'){
    newIconsColored.forEach((elements) => {

      document.getElementById('riga').innerHTML += 
      `
          <div class="icon_box">
              <i class="${elements.family} ${elements.prefix}${elements.name}" style="color:${elements.color}"></i>
              <div class="title">${elements.name.toUpperCase()}</div>
          </div>
      `
    });
  }

});