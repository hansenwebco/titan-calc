function getquerystring(param) {

    var searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(param)) {
        return searchParams.get(param);
    }
    else
        return "";

}

function loadHtml(id, file) {

    var request = new XMLHttpRequest();
    request.open('GET', '/html/' + file, false);

    request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
        document.getElementById(id).innerHTML = resp;
        
    }
    };
    request.send();
}

window.loadHtml = loadHtml;
window.getquerystring = getquerystring;
