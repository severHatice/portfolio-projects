const templateCard = document.querySelector('.card');

cardDatas.forEach((card)=>{

   const clonedCard = templateCard.cloneNode(true);

   clonedCard.querySelector('h1').innerText=card.title;
   clonedCard.querySelector('p').innerText=card.description;
   clonedCard.querySelector('img').src=card.imageUrl;
   clonedCard.addEventListener('click',()=>{

   })

   document.querySelector('.card-container').append(clonedCard);

})
templateCard.remove();