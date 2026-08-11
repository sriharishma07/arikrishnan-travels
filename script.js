// Package Selection

function selectPackage(packageName) {

    alert(
        "You selected: " +
        packageName +
        "\nPlease fill the booking form below."
    );

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


// Booking Form

document.getElementById("bookingForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let from = document.getElementById("from").value;
        let to = document.getElementById("to").value;

        document.getElementById("message").innerHTML =
            "✅ Thank you " + name +
            "! Your booking request from " +
            from + " to " + to +
            " has been received.";

        document.getElementById("bookingForm").reset();
    }
);
