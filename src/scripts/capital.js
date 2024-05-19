    /*cspell: disable */

const state_list = [
	{ "name": "Andhra Pradesh", "capital": "Amaravati", isState: true},
	{ "name": "Arunachal Pradesh", "capital": "Itanagar", isState: true},
	{ "name": "Assam", "capital": "Dispur", isState: true},
	{ "name": "Bihar", "capital": "Patna", isState: true},
	{ "name": "Chhattisgarh", "capital": "Raipur" ,isState: true},
	{ "name": "Goa", "capital": "Panaji", isState: true},
	{ "name": "Gujarat", "capital": "Gandhinagar", isState: true},
	{ "name": "Haryana", "capital": "Chandigarh", isState: true},
	{ "name": "Himachal Pradesh", "capital": "Shimla", isState: true},
	{ "name": "Jharkhand", "capital": "Ranchi", isState: true},
	{ "name": "Karnataka", "capital": "Bengaluru", isState: true},
	{ "name": "Kerala", "capital": "Thiruvananthapuram", isState: true},
	{ "name": "Madhya Pradesh", "capital": "Bhopal", isState: true},
	{ "name": "Maharashtra", "capital": "Mumbai", isState: true},
	{ "name": "Manipur", "capital": "Imphal", isState: true},
	{ "name": "Meghalaya", "capital": "Shillong", isState: true},
	{ "name": "Mizoram", "capital": "Aizawl", isState: true},
	{ "name": "Nagaland", "capital": "Kohima", isState: true},
	{ "name": "Odisha", "capital": "Bhubaneswar", isState: true},
	{ "name": "Punjab", "capital": "Chandigarh", isState: true},
	{ "name": "Rajasthan", "capital": "Jaipur", isState: true},
	{ "name": "Sikkim", "capital": "Gangtok", isState: true},
	{ "name": "Tamil Nadu", "capital": "Chennai", isState: true},
	{ "name": "Telangana", "capital": "Hyderabad", isState: true},
	{ "name": "Tripura", "capital": "Agartala", isState: true},
	{ "name": "Uttar Pradesh", "capital": "Lucknow", isState: true},
	{ "name": "Uttarakhand", "capital": "Dehradun", isState: true},
	{ "name": "West Bengal", "capital": "Kolkata", isState: true}
];

// union territory list
const ut_list = [
	{ "name": "Andaman and Nicobar Islands", "capital": "Port Blair", isState: false },
	{ "name": "Chandigarh", "capital": "Chandigarh" , isState: false},
	{ "name": "Dadra and Nagar Haveli and Daman and Diu", "capital": "Daman" , isState: false},
	{ "name": "Jammu & Kashmir", "capital": "Srinagar" , isState: false},
	{ "name": "Ladakhr", "capital": "Leh" , isState: false},
	{ "name": "Lakshadweep", "capital": "Kavaratti" , isState: false},
	{ "name": "Delhi", "capital": "New Delhi" , isState: false},
	{ "name": "Puducherry", "capital": "Puducherry" , isState: false}
];



const section_state = document.querySelector("#state");
const section_ut = document.querySelector("#ut");

const createItemRows = (list) => {
	let fragment = document.createDocumentFragment();
	list.forEach((item) => {
		let article = document.createElement("article");
		let details = document.createElement("details");
		let summary = document.createElement("summary");
		summary.innerText = item.name;
		let p = document.createElement("p");
		p.innerText = item.capital;
		details.appendChild(summary);
		details.appendChild(p);
		article.appendChild(details);
		fragment.appendChild(article);
	});
	return fragment;
};

const state_rows = createItemRows(state_list);

const ut_rows = createItemRows(ut_list);


section_state?.appendChild(state_rows);

section_ut?.appendChild(ut_rows);

