let cntOpen=0;
let cntClosed=0;
let cnt=0;



const createElements = (arr) => {
    const htmlElements = arr.map((el) => `<span class="text-left font-semibold items-center text-[10px] ${el} ">
    ${el}
    </span>`);
    return (htmlElements.join(" "));
}

const allDivLoad = () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayCard(data.data));


}

const loadTheDetail= async (id)=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    const res=await fetch(url);
    const details=await res.json();
    displayTheDetails(details.data);
}

const displayTheDetails=(details)=>{
 console.log(details);
  const detailsContainer=document.getElementById('details-container');
  detailsContainer.innerHTML='';
  const detailsDiv=document.createElement('div')
  detailsDiv.innerHTML=`
            <div class="space-y-3">
                    <h1 class="font-bold text-2xl">${details.title} </h1>
                    <div class="flex gap-2 justify-left items-center text-[#64748B] ">
                        <button class="btn h-6 rounded-lg bg-green-600 text-white">${details.status}</button>
                        <p>Opened by the ${details.author} </p>
                        <p>${details.updatedAt} </p>
                    </div>
                    <p class="text-[#64748B] text-[12px]">${details.description}</p>
                    <div class="flex gap-30">
                        <div>
                            <p class="text-[#64748B]"> Assignee:</p>
                            <h1 class="font-bold">${details.assignee}</h1>
                        </div>
                        <div>
                            <p class="text-[#64748B]">priority:</p>
                            <h1 class="high w-30 font-bold">${details.priority}</h1>
                        </div>

                    </div>
                </div>
  `
  detailsContainer.append(detailsDiv);
  document.getElementById('my_modal_5').showModal();
}

const displayCard = (items) => {

    const divContainer = document.getElementById('div-container');
    //divContainer.innerHTML = '';

    // open-container 
    const openDivContainer = document.getElementById('open-div-container');
    //openDivContainer.innerHTML = '';

    // closed container 
    const closedDivContainer = document = document.getElementById('closed-div-container');
    // closedDivContainer.innerHTML='';



    // "id": 1,
    //       "title": "Fix navigation menu on mobile devices",
    //       "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
    //       "status": "open",
    //       "labels": [
    //         "bug",
    //         "help wanted"
    //       ],
    //       "priority": "high",
    //       "author": "john_doe",
    //       "assignee": "jane_smith",
    //       "createdAt": "2024-01-15T10:30:00Z",
    //       "updatedAt": "2024-01-15T10:30:00Z"

      cnt = items.length;
   
    for (const item of items) {

        const numberOfCard = document.getElementById('number-of-card')
        numberOfCard.innerHTML = cnt;


        const card = document.createElement('div');
        card.innerHTML = `
       
        <div class="shadow-md p-6 space-y-5 rounded-lg ${item.status}">
           <div class="flex justify-between items-center">
             <i class="fa-regular fa-circle"></i>
            <h1 class=" ${item.priority} rounded-md"><span></span>${item.priority}</h1>
           </div>

           <div class="space-y-3">
              <p class="title font-semibold text-sm text-[#1F2937] ">${item.title} </p>
              <p class="description text-[10px] test-[#64748B] "> ${item.description}</p>
           </div>

           <div class="objects flex flex-col gap-2">  
            ${createElements(item.labels)}
           </div>
             <button  onclick="loadTheDetail(${item.id})" class="btn btn-soft btn-accent h-6">More..</button>
           <hr class="">
           <div class="space-y-3">
            <h1 class="author text-[12px] text-[#64748B]"> ${item.author} </h1>
            <p class="createAt text-[12px] text-[#64748B]"> ${item.updatedAt} </p>
           </div>
        </div>
        
        `
        

        // append in openDivContainer
        // if(item.status=='open'){
        //    // console.log('status=',item.status)
        //     openDivContainer.append(card);
        // }

        // // append in closedDivContainer
        // else if(item.status=='closed'){
        //    // console.log('status=',item.status)
        //     closedDivContainer.append(card);
        // }
        // divContainer.append(card);


        if (item.status === 'open') {
            openDivContainer.append(card.cloneNode(true));
            cntOpen++;
        }

        if (item.status === 'closed') {
            closedDivContainer.append(card.cloneNode(true));
            cntClosed++;
        }

        divContainer.append(card); // original goes here

    }

}

const btnAll=document.getElementById('btn-all')
const btnOpen=document.getElementById('btn-open')
const btnClosed=document.getElementById('btn-closed')
   
const allBtn = () => {
    const divContainer = document.getElementById('div-container');
    divContainer.classList.remove('hidden');
    // divContainer.classList.add('bgBlue');

    const openDivContainer = document.getElementById('open-div-container');
    openDivContainer.classList.add('hidden');

    const closedDivContainer = document = document.getElementById('closed-div-container');
    closedDivContainer.classList.add('hidden');

    const numberOfCard = document.getElementById('number-of-card')
        numberOfCard.innerHTML = cnt;

    // btn color change 
     btnAll.classList.add('bgBlue');
     btnOpen.classList.remove('bgBlue');
     btnClosed.classList.remove('bgBlue');

}

const openBtn = () => {
    const divContainer = document.getElementById('div-container');
    divContainer.classList.add('hidden');

    const closedDivContainer = document = document.getElementById('closed-div-container');
    closedDivContainer.classList.add('hidden');

    const openDivContainer = document.getElementById('open-div-container');
    openDivContainer.classList.remove('hidden');

    const numberOfCard = document.getElementById('number-of-card')
        numberOfCard.innerHTML = cntOpen;
    
      // btn color change 
     btnAll.classList.remove('bgBlue');
     btnOpen.classList.add('bgBlue');
     btnClosed.classList.remove('bgBlue');

}

const closedBtn = () => {
    const divContainer = document.getElementById('div-container');
    divContainer.classList.add('hidden');

    const openDivContainer = document.getElementById('open-div-container');
    openDivContainer.classList.add('hidden');

    const closedDivContainer = document = document.getElementById('closed-div-container');
    closedDivContainer.classList.remove('hidden');

    const numberOfCard = document.getElementById('number-of-card')
        numberOfCard.innerHTML = cntClosed;

    // btn color change 
     btnAll.classList.remove('bgBlue');
     btnOpen.classList.remove('bgBlue');
     btnClosed.classList.add('bgBlue');

}



allDivLoad();