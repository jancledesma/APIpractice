var btn = document.getElementById('btn');
// var output = document.getElementById('output');
// btn.addEventListener("click",function(){
    var xhr = new XMLHttpRequest();
    var url = 'https://restcountries.eu/rest/v2/all'
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.response);
            for (var x = 0; x<data.length; x++){
                var opt = document.createElement("option");
                opt.innerText = data[x].name;
                document.querySelector("#selectBox").appendChild(opt);
                // data.push(options[x].text);
            }
        }
    }
    xhr.open('GET',url);
    xhr.send();
// })