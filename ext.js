let date=new Date().toLocaleDateString();
getDate();
function getCountry() {
    let country="Nepal";
    return `The country is ${country}`;
}
function getDate() {
    let dateElement=document.getElementById("date");//DOM method to target DOM element

    /add a button element inside dateElement/
    let newBtn=document.createElement("button");
    newBtn.innerHTML='Get Full Date';
    newBtn.addEventListener("click",(ev)=>{
        alert(new Date());
    })

    dateElement.style.color="red";
    dateElement.style.display="flex";
    dateElement.style.gap="10px";
    dateElement.style.margin="10px 0";
    dateElement.style.alignItems="center";
    dateElement.innerHTML=`Date: ${date}`;

    dateElement.appendChild(newBtn);
let date=new Date().toLocaleDateString();
getDate();
function getCountry() {
    let country="Nepal";
    return `The country is ${country}`;
}
function getDate() {
    let dateElement=document.getElementById("date");//DOM method to target DOM element

    /add a button element inside dateElement/
    let newBtn=document.createElement("button");
    newBtn.innerHTML='Get Full Date';
    newBtn.addEventListener("click",(ev)=>{
        alert(new Date());
    })

    dateElement.style.color="red";
    dateElement.style.display="flex";
    dateElement.style.gap="10px";
    dateElement.style.margin="10px 0";
    dateElement.style.alignItems="center";
    dateElement.innerHTML=`Date: ${date}`;

    dateElement.appendChild(newBtn);

}
}