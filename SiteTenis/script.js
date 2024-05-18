let container = document.querySelector('.container')
let paginationContainer = document.querySelector('.pagination-cont')

console.log(paginationContainer.childElementCount)
function next(){
    let nextItem = document.querySelector('.next')    
    let prevItem = document.querySelector('.prev')    
    let activeItem = document.querySelector('.active')  
    
    nextItem.classList.remove('next')
    nextItem.classList.add('active')

    prevItem.classList.remove('prev')
    prevItem.classList.add('next')

    activeItem.classList.remove('active')
    activeItem.classList.add('prev')

    changeBg()
    updateNav()
}
function prev(){
    let nextItem = document.querySelector('.next')    
    let prevItem = document.querySelector('.prev')    
    let activeItem = document.querySelector('.active') 
    
    
    prevItem.classList.remove('prev')
    prevItem.classList.add('active')

    nextItem.classList.remove('next')
    nextItem.classList.add('prev')


    activeItem.classList.remove('active')
    activeItem.classList.add('next')


    changeBg()
    updateNav()
}
function changeBg(){ 
    let activeItem = document.querySelector('.active')
    
    let activeColor = activeItem.getAttribute("color")
    let radialColor = activeItem.getAttribute("radial")

    container.style = `
    background:${activeColor};
    background:${radialColor};`
    
}

function updateNav(){
    let contFirst = document.querySelector('.contFirst')
    let contSecond = document.querySelector('.contSecond')
    let contLast = document.querySelector('.contLast')

    if(firstContainer.classList.contains('active')){
        contFirst.classList.add('activeCont')
        contSecond.classList.remove('activeCont')
        contLast.classList.remove('activeCont') 
    } 
    else if(secondContainer.classList.contains('active')){
        contFirst.classList.remove('activeCont')
        contSecond.classList.add('activeCont')
        contLast.classList.remove('activeCont') 
    } 
    else if(lastContainer.classList.contains('active')){
        contFirst.classList.remove('activeCont')
        contSecond.classList.remove('activeCont')
        contLast.classList.add('activeCont') 
    } 
    
}
changeBg()