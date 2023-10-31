const COHORT = '2309-FTB-ET-WEB-FT'
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/parties`

const state = {
  parties: [],
}

const partiesList = document.querySelector('#parties');
const addPartyForm = document.querySelector('#addParty');

async function getParties(){
  const response = await fetch(API_URL, {

  })
}

function renderParties(){
  partiesList.innerHTML = '';
  state.parties.forEach(party => {
    const partyItem = document.createElement('li');
    partyItem.innerHTML =
    //TODO;

    partiesList.appendChild(partyItem)
  })
}
async function addParty(event){
  event.preventDefault();
  //TODO
}

//TODO post
//TODO delete