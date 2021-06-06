var tweet = document.getElementById('word').value;
var out = document.getElementById('out');
var twt = document.getElementById('twt');


var tweetnew = tweet.slice(0, 280);

out.innerHTML = "You have " + (280 - tweetnew.length) + " characters left";

function count() {
    tweet = document.getElementById('word').value;
    var tweetnew = tweet.slice(0, 280);

    twt.href = `https://twitter.com/intent/tweet?text=${tweetnew}`;

    var left = (280 - tweetnew.length);
    out.innerHTML = "You have " + left + " characters left";
    
    if (left < 1) {
        out.innerHTML = "You have " + (tweetnew.length - tweet.length) + " characters left  You can not Tweet now";

        // twt.style.display= "none";
    }
    else {
        twt.style.display= "inline";
        
    }
    if(tweet.length > 280) {
        twt.style.display= "none";
    }
    if(tweet.length < 1) {
        twt.style.display= "none";
    }
}

// https://twitter.com/intent/tweet?url=http://github.com/flyingsonu122/&text=Contributing%20on%20GitHub%20since%20June,%202019%20-%20142%20repos,%208%20stars,%2025%20forks,%207%20followers.%20&hashtags=Sonu
