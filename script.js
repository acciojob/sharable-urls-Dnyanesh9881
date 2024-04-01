// your code here
const heading=document.getElementById("url");
const name=document.getElementById("name");
const year=document.getElementById("year");
const submit=document.getElementById("button");

submit.addEventListener("click", ()=>{
	e.preventDefault();

	if(name.value==""){
		heading.innerText="https://localhost:8080/"+year
	}
})
