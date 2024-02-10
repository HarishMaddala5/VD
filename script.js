const arr = ["WHAT!!","REALLY","R U SURE?","THINK AGAIN","HEYY PLEASE","PLEASE","PLEASEE","PLEASEEE","PLEASEEEE","PLEASEEEEE","PLEASE🥺"];
let c=0,count=0;
function fun(){
    document.getElementById("val").innerHTML=arr[c];
    if(c<10){
        c++;
    }
    else{
        c=3;
    }
}
function fun2(){
    alert("Your Acceptance is sent to Harish🥰");
    const sid="service_zo4etcd";
    const tid="template_nbdvk1w";
    emailjs.send(sid,tid) 
}