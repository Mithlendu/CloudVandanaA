function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = getSelectedGender();
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // condition for validations

    var result = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${gender}
        Profession: ${profession}
        Email: ${email}
        Mobile Number: ${mobile}
    `;

    alert(result);
}

function getSelectedGender() {
    var gender = "";
    if (document.getElementById("male").checked) {
        gender += "Male ";
    }
    if (document.getElementById("female").checked) {
        gender += "Female ";
    }
    if (document.getElementById("other").checked) {
        gender += "Other";
    }
    return gender.trim();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}
