var i=0;



function opt(){
    document.getElementById("operations").innerText=i;
    if(i>0){
        document.body.style.backgroundColor="green";
    }
    else if(i<0){
        document.body.style.backgroundColor="red";

    }
    else{
        document.body.style.backgroundColor="gray"
    }
}
function increament() {
     i++;
    opt();
    

}
function decreament(){
 i--;
 opt();

}
function reset(){
    i=0;
    opt();
}
