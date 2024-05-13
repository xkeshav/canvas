    /*cspell: disable */

const list = [
	{ "state": "Andhra Pradesh", "capital": "Amaravati" },
	{ "state": "Arunachal Pradesh", "capital": "Itanagar" },
	{ "state": "Assam", "capital": "Dispur" },
	{ "state": "Bihar", "capital": "Patna" },
	{ "state": "Chhattisgarh", "capital": "Raipur" },
	{ "state": "Goa", "capital": "Panaji" },
	{ "state": "Gujarat", "capital": "Gandhinagar" },
	{ "state": "Haryana", "capital": "Chandigarh" },
	{ "state": "Himachal Pradesh", "capital": "Shimla" },
	{ "state": "Jharkhand", "capital": "Ranchi" },
	{ "state": "Karnataka", "capital": "Bengaluru" },
	{ "state": "Kerala", "capital": "Thiruvananthapuram" },
	{ "state": "Madhya Pradesh", "capital": "Bhopal" },
	{ "state": "Maharashtra", "capital": "Mumbai" },
	{ "state": "Manipur", "capital": "Imphal" },
	{ "state": "Meghalaya", "capital": "Shillong" },
	{ "state": "Mizoram", "capital": "Aizawl" },
	{ "state": "Nagaland", "capital": "Kohima" },
	{ "state": "Odisha", "capital": "Bhubaneswar" },
	{ "state": "Punjab", "capital": "Chandigarh" },
	{ "state": "Rajasthan", "capital": "Jaipur" },
	{ "state": "Sikkim", "capital": "Gangtok" },
	{ "state": "Tamil Nadu", "capital": "Chennai" },
	{ "state": "Telangana", "capital": "Hyderabad" },
	{ "state": "Tripura", "capital": "Agartala" },
	{ "state": "Uttar Pradesh", "capital": "Lucknow" },
	{ "state": "Uttarakhand", "capital": "Dehradun" },
	{ "state": "West Bengal", "capital": "Kolkata" },
	{ "state": "Andaman and Nicobar Islands", "capital": "Port Blair" },
	{ "state": "Chandigarh", "capital": "Chandigarh" },
	{ "state": "Dadra and Nagar Haveli and Daman and Diu", "capital": "Daman" },
	{ "state": "Lakshadweep", "capital": "Kavaratti" },
	{ "state": "Delhi", "capital": "New Delhi" },
	{ "state": "Puducherry", "capital": "Puducherry" }
];


const section = document.querySelector("#section");

const createItemRows = () => {
	let fragment = document.createDocumentFragment();
	list.forEach((item) => {
		let article = document.createElement("article");
		let details = document.createElement("details");
		let summary = document.createElement("summary");
		summary.innerText = item.state;
		let p = document.createElement("p");
		p.innerText = item.capital;
		details.appendChild(summary);
		details.appendChild(p);
		article.appendChild(details);
		fragment.appendChild(article);
	});
	return fragment;
};

const rows = createItemRows();
section?.appendChild(rows);

