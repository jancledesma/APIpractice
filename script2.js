var btn = document.getElementById('submitButton');
var output = document.getElementById('output');
btn.addEventListener("click",function(){
    var item = document.getElementById("item").value;
    var xhr = new XMLHttpRequest();
    var url = "https://randomuser.me/api/?results=" + item;
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.response).results;
            for (var x = 0; x<data.length; x++){
                var para = document.createElement("p");
                var imahe = document.createElement("img");
                para.innerText = data[x].name.title + " " + data[x].name.first + " " + data[x].name.last;
                para.id="p" + x;
                document.querySelector("#content").appendChild(para);
                imahe.src = data[x].picture.thumbnail;
                document.querySelector("#" +para.id).append(imahe); 
            }
        }
    }
    xhr.open('GET',url);
    xhr.send();
})

// function clearBox(elementID) { 
//     var div = document.getElementById(elementID); 
      
//     while(div.firstChild) { 
//         div.removeChild(div.firstChild); 
//     } 
// } 
