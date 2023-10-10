const templateCard = document.querySelector('.card');

cardDatas.forEach((card)=>{

   const clonedCard = templateCard.cloneNode(true);

   clonedCard.querySelector('h2').innerText=card.title;
   clonedCard.querySelector('p').innerText=card.description;
   clonedCard.querySelector('img').src=card.imageUrl;
//    clonedCard.style.backgroundImage=card.imageUrl
   clonedCard.addEventListener('click',()=>{
    window.location.href = card.url; 
   })

   document.querySelector('.card-container').append(clonedCard);

})
templateCard.remove();