const COHORT = '2309-FTB-ET-WEB-FT'
const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/" + COHORT;

const state = {
  events: []
}

const partyList = document.getElementById("partyList");
const partyForm = document.getElementById('partyForm');

async function createEvent(event){
  event.preventDefault();
  try{
    const response = await fetch(API + '/events',{
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        date: `${document.getElementById('date').value}:00.000Z`,
        location:document.getElementById('location').value,
      }) 
    });
    getEvents();

  }catch(error){
    console.error(error);
  }
}

partyForm.addEventListener('submit', createEvent)



async function getEvents(){
  try {
    const response = await fetch(API + "/events");
    const json = await response.json();
    state.events = json.data;
    renderGetEvents()
  } catch(error){
    console.error(error);
  }
}

async function deleteEvent(){

}

function renderGetEvents(){
const events = state.events.map((event) =>{
  const article = document.createElement('article');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = "X";
  deleteBtn.addEventListener('click', async() =>{
    try{
      const response = await fetch(API + `/events/${event.id}`, {
        method: 'DELETE'

      });
      console.log('deleted')
      getEvents();

    }catch(error){
      console.error(error);
    }

  })
  article.innerHTML = `
  <h3>${event.name}</h3>
  <address>${event.location}</address>`
  article.append(deleteBtn)

  return article;
});
partyList.replaceChildren(...events);
}

getEvents();