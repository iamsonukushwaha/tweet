var tweet = document.getElementById('word').value;
var out = document.getElementById('out');
var btn = document.getElementById('btn');
var tweetnew = tweet.slice(0, 280);
out.innerHTML = "You have " + (280 - tweetnew.length) + " characters left";

function count() {
    tweet = document.getElementById('word').value;
    var tweetnew = tweet.slice(0, 280);
    // console.log(tweetnew);
    // console.log("You have " + (280 - tweetnew.length) + " characters left");

    var left = (280 - tweetnew.length);
    out.innerHTML = "You have " + left + " characters left";
    if (left < 1) {
        out.innerHTML = "You have " + (tweetnew.length - tweet.length ) + " characters left  You can not Tweet now";

        btn.setAttribute("disabled", "");
    }
    else {
        btn.removeAttribute("disabled");
    }
}
