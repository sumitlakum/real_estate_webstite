let people=document.getElementById('people');
let pless=document.getElementById('pless');
let pmore=document.getElementById('pmore');


let people_index=4;
pless.addEventListener('click',()=>{
     people_index-=1;
     if (people_index<=0) {
        people_index=1
        people.value = people_index +' people';
     }
     else{
        people.value = people_index +' people';
     }
});
pmore.addEventListener('click',()=>{
    people_index+=1
    if (people_index>=4) {
       people_index=4
       people.value = people_index +' people';
    }
    else{
       people.value = people_index +' people';
    }
});





