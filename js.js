function jsFunction(){

    var reg= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email = document.getElementById("inputEmail4").value;

    if(document.getElementById("inputAddress").value.length == 0)
    {
        alert("Please insert text")

    }else if(reg.test(email) == false){
        alert("INVALID EMIAL ADDRESS");
    }else{
        alert("Submitted Successfully ");
    }
}