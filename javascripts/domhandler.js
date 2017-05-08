console.log("hey");
var donor = document.getElementById("donor");
var amount = document.getElementById("amount");
var email = document.getElementById("email");
var type = document.getElementById("donationType");
var cancel = document.getElementById("cancel");
var donate = document.getElementById("donate");
var table = document.getElementById("table");
function clearForm(){
	donor.value = "";
	amount.value = "";
	email.value = "";
	type.value = "none";
	console.log("we are clear");
};

donate.addEventListener("click", function(){
	console.log(donor.value);
	console.log(document.getElementById("donor").value);

	console.log("click function");
	let newDonor = {
		name: donor.value,
		amount: amount.value,
		email: email.value,
		type: type.value
	}
	Donation.addDonor(newDonor);
	let newEntry = `<tr>
					   <td>${newDonor.name}</td>
					   <td>${newDonor.amount}</td> 
					   <td>${newDonor.type}</td>
					</tr>`;
	table.innerHTML += newEntry;
	clearForm();
});

cancel.addEventListener("click", function(){
	console.log("hey we made it");
	clearForm();
});

document.addEventListener("keyup", function(event){
	if(event.keyCode == 13){
		console.log("hey");
		let info = Donation.showDonors();
		console.log(info);
	}
});


