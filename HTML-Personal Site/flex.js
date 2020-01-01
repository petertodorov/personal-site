let flexContainer = document.getElementsByClassName('elements')[0]

function changePositions(event){
    let position =event.target.innerText
    if(position==='center'){
   return flexContainer.style.justifyContent = 'space-between' 
    }
    flexContainer.style.justifyContent = 'flex-'+position
}
