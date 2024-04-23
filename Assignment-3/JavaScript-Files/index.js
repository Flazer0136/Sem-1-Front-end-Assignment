function userSubmitMax0() {
    var x = document.forms["voteForm0"]["name0"].value;
    if (x == "") {
        alert("Please enter a name");
    }
    else {
        document.getElementById("voteForm0").style.display = 'none';
        document.getElementById("pollResultsMax0").style.display = 'block';
    }
}
function userSubmitTen0() {
    var x = document.forms["voteForm0"]["name0"].value;
    if (x == "") {
        alert("Please enter a name");
    }
    else {
    document.getElementById("voteForm0").style.display = 'none';
    document.getElementById("pollResultsTen0").style.display = 'block';
    }
}
function userSubmitMona0() {
    var x = document.forms["voteForm0"]["name0"].value;
    if (x == "") {
        alert("Please enter a name");
    }
    else {
    document.getElementById("voteForm0").style.display = 'none';
    document.getElementById("pollResultsMona0").style.display = 'block';
    }
}
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