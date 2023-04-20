const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


let prices = document.querySelectorAll(".price");
let table = document.querySelector("table");


const getSum = () => {
//Add your code here
  let sum = 0;
  prices.forEach((price) =>{
   sum+=  Number (price.innerText);
  });
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerText = sum;
  tr.appendChild(td);
  tr.setAttribute("id","ans");
	
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

