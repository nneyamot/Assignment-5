 const createElements=(arr)=>{
    const htmlElements=arr.map((el)=>`<span class="text-left font-semibold items-center text-[10px] ${el} ">
    ${el}
    </span>`);
    return(htmlElements.join(" "));
}

const allBtnLoad=()=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displaycard(data.data));


}

const displaycard=(items)=>{

    const divContainer=document.getElementById('div-container');
    divContainer.innerHTML='';
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

     let cnt=items.length;
     
    for(const item of items){

        const numberOfCard=document.getElementById('number-of-card')
        numberOfCard.innerHTML=cnt;
        
        
        const card=document.createElement('div');
        card.innerHTML=`
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
           <hr class="">
           <div class="space-y-3">
            <h1 class="author text-[12px] text-[#64748B]"> ${item.author} </h1>
            <p class="createAt text-[12px] text-[#64748B]"> ${item.updatedAt} </p>
           </div>
        </div>
        
        `
        divContainer.append(card);
    }

}

// allBtnLoad();