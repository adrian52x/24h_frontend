const candidatesBtn = document.querySelector(".display-candidates")
const deleteCandidateBtn = document.querySelector(".delete-candidate")

const table = document.querySelector(".contentsTable")
const tableHeader = document.querySelector(".table-header")


// Candidates   
// Table Header 
const thIdCandidate = document.createElement("th")
thIdCandidate.innerHTML = "ID";
const thFirstName = document.createElement("th")
thFirstName.innerHTML = "First name";
const thLastName = document.createElement("th")
thLastName.innerHTML = "Last name";
const thAge = document.createElement("th")
thAge.innerHTML = "Age";



function getAllCandidates(){


    const partyId = document.querySelector("#sortCandidates");
    

    if(partyId.value === ""){
        console.log("call1");
        fetch(`http://localhost:8080/candidates${partyId.value}`)
        .then((Response) => Response.json())
        .then((candidates) => {
        console.log(candidates);
        
        candidates.forEach( (candidate) =>{

            const trElement = document.createElement("tr")

            const tdId = document.createElement("td")
            tdId.innerHTML = candidate.id;
            const tdFirstName = document.createElement("td")
            tdFirstName.innerHTML = candidate.firstName;
            const tdLastName = document.createElement("td")
            tdLastName.innerHTML = candidate.lastName;
            const tdAge = document.createElement("td")
            tdAge.innerHTML = candidate.age;

            trElement.append(
                tdId,
                tdFirstName,
                tdLastName,
                tdAge
                );
           
            table.appendChild(trElement);
        });
        }); 


    }else{
        console.log("call2");
        fetch(`http://localhost:8080/candidates/${partyId.value}`)
        .then((Response) => Response.json())
        .then((candidates) => {
        console.log(candidates);
        
        candidates.forEach( (candidate) =>{

            const trElement = document.createElement("tr")

            const tdId = document.createElement("td")
            tdId.innerHTML = candidate.id;
            const tdFirstName = document.createElement("td")
            tdFirstName.innerHTML = candidate.firstName;
            const tdLastName = document.createElement("td")
            tdLastName.innerHTML = candidate.lastName;
            const tdAge = document.createElement("td")
            tdAge.innerHTML = candidate.age;

            trElement.append(
                tdId,
                tdFirstName,
                tdLastName,
                tdAge
                );
           
            table.appendChild(trElement);
        });
        }); 

    }

    
}  


// Display all candidates
candidatesBtn.addEventListener("click", () => {
    
     tableHeader.append(
            thIdCandidate,
            thFirstName,
            thLastName,
            thAge
            );
    
    getAllCandidates()


});


function deleteCandidate(){

    const candidateId = document.querySelector("#deleteCandidateById");
    
    
    
    fetch(`http://localhost:8080/candidate/${candidateId.value}`, {
			method: "Delete",
			headers: {
				"Content-Type": "application/json",
			},
			//body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {

                if(data.status === 404){
                    alert(data.message)
                }

			})
			.catch((error) => {
				console.error("Error:", error);
		});
	
}

// Delete candidate by id
deleteCandidateBtn.addEventListener("click", () => {
    
    deleteCandidate()
    alert("Deleted")
    location.reload()
});