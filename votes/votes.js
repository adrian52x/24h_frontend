const votesBtn = document.querySelector(".randomVotes")
const resultBtn = document.querySelector(".electionResults")


const table = document.querySelector(".contentsTable")
const tableHeader = document.querySelector(".table-header")
// Results table  
// Table Header 
    const thPartyName = document.createElement("th")
    thPartyName.innerHTML = "Party name";
    const thPartyVotes = document.createElement("th")
    thPartyVotes.innerHTML = "Party total votes";



function generateRandomVotes(){
    fetch(`http://localhost:8080/getVotes`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			//body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
                
			})
			.catch((error) => {
				console.error("Error:", error);
                
		});

}

votesBtn.addEventListener("click", () => {

    generateRandomVotes()
    alert("Votes generated successfully")
    location.reload()

})


resultBtn.addEventListener("click", () => {

    tableHeader.append(
        thPartyName,
        thPartyVotes
        );



    fetch('http://localhost:8080/parties')
    .then((Response) => Response.json())
    .then((parties) => {
       // console.log(parties);
        
        parties.forEach((party) =>{
            let sum = 0;
            for(let i=0;i<party.candidates.length;i++){
                sum = sum + party.candidates[0].votes;
            }

            const trElement = document.createElement("tr")

            const tdPartyName = document.createElement("td")
            tdPartyName.innerHTML = party.name;
            const tdPartyVotes = document.createElement("td")
            tdPartyVotes.innerHTML = sum;

            trElement.append(
                tdPartyName,
                tdPartyVotes
                );
           
            table.appendChild(trElement);
            
            console.log(party.name + " "+ sum);
            //console.log(party.candidates.length);

        });
    }); 
    

})