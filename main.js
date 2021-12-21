
const partiesBtn = document.querySelector(".display-parties")

const table = document.querySelector(".contentsTable")
const tableHeader = document.querySelector(".table-header")
// Parties    
// Table Header 
    const thId = document.createElement("th")
    thId.innerHTML = "ID";
    const thPartyName = document.createElement("th")
    thPartyName.innerHTML = "Party name";
    const thLeader = document.createElement("th")
    thLeader.innerHTML = "Party leader";


function getParties(){
    fetch('http://localhost:8080/parties')
    .then((Response) => Response.json())
    .then((parties) => {
        console.log(parties);
        
        parties.forEach( (party) =>{

            const trElement = document.createElement("tr")

            const tdId = document.createElement("td")
            tdId.innerHTML = party.id;
            const tdPartyName = document.createElement("td")
            tdPartyName.innerHTML = party.name;
            const tdLeader = document.createElement("td")
            tdLeader.innerHTML = party.leaderName;

            trElement.append(
                tdId,
                tdPartyName,
                tdLeader);
           
            table.appendChild(trElement);

        });
    }); 
}



    

// Display all parties
partiesBtn.addEventListener("click", () => {
    
    tableHeader.append(
        thId,
        thPartyName,
        thLeader);

    getParties()
    
});


        
