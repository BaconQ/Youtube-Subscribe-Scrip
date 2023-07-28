var i = 0;
var myVar = setInterval(myTimer, 3000);

function myTimer() {
    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {
        var unsubscribeButton = els[i].querySelector("[aria-label^='Unsubscribe from']");
        if (unsubscribeButton) {
            unsubscribeButton.click();

            setTimeout(function() {
                var confirmButton = document.querySelector("#confirm-button button");
                if (confirmButton) {
                    confirmButton.click();
                }
            }, 2000);
        } else {
            console.log("No unsubscribe button found for channel " + i);
        }
        i++;
    } else {
        clearInterval(myVar);
        console.log("Unsubscribed from all channels.");
    }
    console.log(i + " Channels Unsubscribed");
    console.log(els.length + " remaining");

    // Scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
}
