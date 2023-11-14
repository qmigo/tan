const btn = document.querySelector('#btn')
btn.addEventListener('click', ()=>{
  const card = document.querySelector('.card')
  const footer = document.querySelector('.footer')
  const video = document.querySelector('#video')
  console.log(card)
  card.style.visibility = 'visible';
  footer.style.visibility = "hidden";
  video.play();
})