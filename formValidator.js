let invalidName = invalidEmail = invalidTitle = InvalidMessage = true;

const formValidator = () => {

    const errorMsg = (fieldId, msg) => {
        document.getElementById(fieldId).innerHTML = msg;
        }

    const validName = /^[a-zA-Z]{4,40}$/;
    const validEmail = /^\S+@\S+\.\S+$/;
    const validTitle = /^[a-zA-Z\s]{3,80}$/;
    const validMessage = /^[a-zA-Z\s]{20,200}$/;

    let fullName = document.contactForm.fullName.value;
    let email = document.contactForm.email.value;
    let title = document.contactForm.title.value;
    let message = document.contactForm.message.value;

    const fullNameValidity = validName.test(fullName);
    const emailValidity = validEmail.test(email);
    const titleValidity = validTitle.test(title);
    const messageValidity = validMessage.test(message);

    //let invalidName = invalidEmail = invalidTitle = InvalidMessage = true;

    If(!fullNameValidity) {
        errorMsg("invalidName", "Please enter valid name. Minimum of 4 Alphabet Characters");
    } else {
        errorMsg("invalidName", "");
        invalidName = false;
        }

     If(!emailValidity) {
        errorMsg("invalidEmail", "Please enter valid email");
    } else {
        errorMsg("invalidEmail", "");
        invalidEmail = false;
        }

     If((!titleValidity) || (title == "")) {
        errorMsg("invalidTitle", "Please enter valid name. Minimum of 4 Alphabet Characters");
    } else {
        errorMsg("invalidTitle", "");
        invalidTitle = false;
        }

     If(!messageValidity) {
        errorMsg("InvalidMessage", "Please enter a message of minimum of 20 characters");
    } else {
        errorMsg("InvalidMessage", "");
        InvalidMessage = false;
        }

        if((invalidName || invalidEmail || invalidTitle || InvalidMessage) == true) {
            return false;
            } else {
            
            var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + fullName + "\n" +
            "Email Address: " + email + "\n" +
            "Title: " + title + "\n" +
            "Messages: " + message + "\n";
            alert(dataPreview);
            }

	//flagIfInvalid(cardHolderNameField, cardHolderNameIsValid);
    //return cardHolderNameIsValid;
    
};
