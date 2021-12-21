const createBtn = document.querySelector(".create-candidate-btn")
const assignBtn = document.querySelector(".assign-party-btn")

function addCandidate() {

    const first_name = document.querySelector("#fname-field");
    const last_name = document.querySelector("#lname-field");
    const age = document.querySelector("#age-field");
    

    const data = {
        firstName: first_name.value,
        lastName: last_name.value,
        age: age.value,
    };

    
    fetch("http://localhost:8080/candidate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
                alert("Candidate added successfully")
			})
			.catch((error) => {
				console.error("Error:", error);
		});


}


function assignParty(){
    
    const candidateId = document.querySelector("#candidate-id-field");
    const partyId = document.querySelector("#party-id-field");


    fetch(`http://localhost:8080/assign-party/${candidateId.value}/${partyId.value}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			//body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
                
                if(data.status === 404){
                    alert(data.message)
                }
                else{
                    alert("Party assigned successfully")
                }
                
                


			})
			.catch((error) => {
				console.error("Error:", error);
                
		});

}


createBtn.addEventListener("click", () =>{
    addCandidate()
    
});   

assignBtn.addEventListener("click", () =>{
    assignParty()
    
}); 