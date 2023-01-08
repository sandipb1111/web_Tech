setTimeout(()=>{
console.log("hello");
document.title ="Hello ";
},2000);
let fname="Sandip";
let lname="Basnet";
let roll=37;
function handleButton(){
alert(`yo ,${fname},${lname},${roll}`);
}
function handlButton(greet,roll,bool){
    alert(`Hi, ${greet},${roll},${bool}`);

}