const templateCard = document.querySelector('.card');

cardDatas.forEach((card) => {
   const clonedCard = templateCard.cloneNode(true);

   clonedCard.querySelector('h2').innerText = card.title;
   clonedCard.querySelector('p').innerText = card.description;
   
   const cardHeader = clonedCard.querySelector('.card__header');
   cardHeader.style.backgroundImage = `url(${card.imageUrl})`;
   
   clonedCard.addEventListener('click', () => {
      window.location.href = card.url; 
   });
   clonedCard.querySelector('button').addEventListener('click', () => {
      event.stopPropagation();  
      window.location.href = card.codeSource; 
   })

   document.querySelector('.card-container').append(clonedCard);
});
templateCard.remove();
