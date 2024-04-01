// your code here
const heading=document.getElementById("url");
const name=document.getElementById("name");
const year=document.getElementById("year");
const submit=document.getElementById("button");

submit.addEventListener("click", (e)=>{
	e.preventDefault();

	if(name.value==""){
		text="https://localhost:8080/"+"?"+"year="+year.value;
	}else if(year.value==""){
		text="https://localhost:8080/"+"?"+"name="+name.value;
	}else if(name.value!="" && name.value!==""){
		text="https://localhost:8080/"+"?"+"name="+name.value+"&"+"year="+year.value;
	}else{
		text="https://localhost:8080/";
	}
	heading.innerText=text;
})
