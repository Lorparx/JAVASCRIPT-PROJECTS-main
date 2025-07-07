function getMsg(){
    let ajaxRequest = new XMLHttpRequest();
    let inputVal = document.getElementById("fullName").value;
    ajaxRequest.onload = function() {
        document.getElementById("tkuMsg").innerHTML = "Thank You " + inputVal + ", for signing up!";
    }
    //prepare the request from the server
    ajaxRequest.open("GET", "response.html", true);
    ajaxRequest.onreadystatechange = function() {
        if(this.readyState == 4 && this.status === 200) {
            document.getElementById('content').innerHTML = 
            ajaxRequest.responseText;
            // The request was s uccessful, but we don't need to do anything here
        }
    }
    ajaxRequest.send();
    //send the request to the server
}