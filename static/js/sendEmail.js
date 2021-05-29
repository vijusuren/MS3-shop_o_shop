  
//Javascript code to send email through emailjs.init
//The JS code for this section is referred from my Milestone 2 project

var emailjs;

function sendMail(contactForm) {
	emailjs.send("gmail", "Shop_mart", {
			"from_name": contactForm.name.value,
			"from_email": contactForm.emailaddress.value,
			"feedback": contactForm.feedback.value
		})
        .then(
            function(response) {
                var sentButton = document.getElementById("contact-button");
                sentButton.innerHTML = "Feedback Sent!";
                alert("Your feedback is submitted", response);
                },
                function(error) {
               alert("try again", error);
            });
       // Clear form after submission
            document.getElementById("contactForm").reset();
            return false;
    }