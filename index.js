function sendEmail(){ 
    (function(){
emailjs.init("7tT2ajcx54q995I97");
 })();
var params={
 name_id:document.querySelector("#name").value,
 email_id:document.querySelector("#email").value,
 message:document.querySelector("#row").value,
};
var serviceid="service_ifvimz8";
var templateid="template_j7h8ar6";
emailjs.send(serviceid,templateid,params)
.then( result =>{

})
.catch();
}