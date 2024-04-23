function userSubmitMax() {
    var x = document.forms["voteForm"]["name"].value;
    if (x == "") {
        alert("Please enter a name");
    }
    else {
        document.getElementById("voteForm").style.display = 'none';
        document.getElementById("pollResultsMax").style.display = 'block';
    }
}
function userSubmitTen() {
    var x = document.forms["voteForm"]["name"].value;
    if (x == "") {
        alert("Please enter a name");
    }
    else {
    document.getElementById("voteForm").style.display = 'none';
    document.getElementById("pollResultsTen").style.display = 'block';
    }
}
function userSubmitMona() {
    var x = document.forms["voteForm"]["name"].value;
    if (x == "") {
        alert("Please enter a name");
    }
    else {
    document.getElementById("voteForm").style.display = 'none';
    document.getElementById("pollResultsMona").style.display = 'block';
    }
}