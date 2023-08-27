function qr(){
    if (document.querySelector(".image")==null){
    if (document.getElementById("content").value!=""){

    let api="https://chart.googleapis.com/chart?cht=qr&chs=";
    let size=document.querySelector("select").value;
    let content="&chl="+(document.getElementById("content").value);
    var x = document.createElement("IMG");
    x.classList.add("image")
    x.src=api+size+content;
    document.getElementsByClassName("con")[0].insertAdjacentElement("afterbegin", x);
    }else{
        alert("Add content")
    }
}
}
function change(){
    if (document.querySelector(".image")!=null){
    document.querySelector(".image").parentNode.removeChild(document.querySelector(".image"));
    }
}