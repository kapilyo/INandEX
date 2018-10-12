var inEx = {
years: [{
	year: 2018,
	months: [{
		month: 'january',
		inn: 500,
		exp: 200,
		data: [{
				id: 1,
				date: '10/10/2018',
				category: 'oxygen',
				minusExp: 100
			},
			{
				id: 2,
				date: '10/10/2018',
				category: 'hydrozed',
				minusExp: 50
			}]
	}]
}]
}

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

var dateNow = new Date();
var yearNow = dateNow.getFullYear();
var monthNow = monthNames[dateNow.getMonth()];


var loginBtn = document.getElementById('login');
var homeContainer = document.getElementById('homeContainer');
loginBtn.addEventListener('click', function(){
	homeContainer.classList.toggle("showLogin");
})