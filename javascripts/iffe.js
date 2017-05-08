var Donation = (function(){
var donors = [];

	return {
		addDonor: function(newOne){
			console.log("we made it to the iffe");
			donors.push(newOne);
			console.log(donors);
		},
		showDonors: function(){
			return donors;
		}
	}
})();