const MilestoneData = JSON.parse(data).data


function loadMilestones(){
    const milestones = document.querySelector('.milestones')
    milestones.innerHTML = `${MilestoneData.map(function(milestone){
     return `<div class="milestone border-b" id = "${milestone._id}">
                <div class="flex">
                    <div class="checkbox"><input type="checkbox"   onclick = "checkMilestone(this, ${milestone._id})"/></div>
                        <div onclick = "openMilestone(this,${milestone._id})">
                            <p>
                             ${milestone.name}
                            <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                    </div>
                <div class="hidden_panel">
                ${milestone.modules.map(function(module){
                  return `  <div class="module border-b">
                        <p>${module.name}</p>
                   </div>`
                }).join("")}
                
            </div>
      </div>`
    }).join("")}`

}

function openMilestone(milestoneElement,id){
    const currentElement = milestoneElement.parentNode.nextElementSibling
    const shownPanel = document.querySelector('.show')
    const active  = document.querySelector('.active')

        if(!currentElement.classList.contains('show') && shownPanel){
            shownPanel.classList.remove('show')
        } 
         currentElement.classList.toggle('show')

         if(!milestoneElement.classList.contains('active') && active){
            active.classList.remove('active')
         }
         milestoneElement.classList.toggle('active')

    showMilestone(id)
}

function showMilestone(id){
   const milestoneImage = document.querySelector('.milestoneImage')
   const title = document.querySelector('.title')
   const details = document.querySelector('.details')
   milestoneImage.style.opacity = '0'
   milestoneImage.src = `${MilestoneData[id].image}`
   title.innerText = `${MilestoneData[id].name}`
   details.innerText = `${MilestoneData[id].description}`
}

const milestoneImage = document.querySelector('.milestoneImage')
milestoneImage.onload = function(){
    this.style.opacity = '1'
}

function checkMilestone(checkbox,id){
    const milestones = document.querySelector('.milestones')
    const doneList =  document.querySelector('.doneList')
    let  item = document.getElementById(id)
  
    if(checkbox.checked){
        milestones.removeChild(item)
        doneList.appendChild(item)
        
        // console.log(getElementsWithIds()) 
    }else{
        doneList.removeChild(item)
        milestones.appendChild(item)  
        
        // task - will do sorting 
        
    }
}
// function getElementsWithIds() {
//     var elements = [];
//     var elementList = document.querySelectorAll(".milestones [id]");

//       for(let element of elementList){
//         elements.push(element);
//       }

//       elements.sort((a,b)=>{
//         return(a.id - b.id )
//       })

//     return elements;
// }

loadMilestones()

