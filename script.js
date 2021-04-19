app = document.querySelector('#app')
createButton = document.querySelector('#createButton')
ileLoader = document.querySelector('#fileLoader')

background = ''


getOnclick = (Image) => {
    return () => {app.removeChild(Image)}
}

createButton.onclick = ()=>{
   image = document.createElement('div')
   image.style.backgroundImage = `url(${background})`
   image.classList.add('image')

   close = document.createElement('img')
   close.src = 'filedelete.png'
   close.onclick = getOnclick(image)
   image.appendChild(close)

   app.appendChild(image)

   $('.image').draggable({ grid: [5,5], contaiment: "#app", scroll: false});
   $('.image').resizable({ grid: 5})

}
fileLoader.onchange = ()=> {
    file = fileLoader.files[0]

    reader = new FileReader();
    reader.onload = (event) => {
        background = event.target.result
        document.querySelectorAll('.image').forEach(image => image.style.backgroundImage = `url(${background})`)
    };
    reader.readAsDataURL(file);
}
