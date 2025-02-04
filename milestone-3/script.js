// Select elements safely with `let` to avoid redeclaration errors
var modal = document.getElementById("resumeModal");
var openModalButton = document.getElementById("openModal");
var closeModalButton = document.getElementById("closeModal");
var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
// Open modal when button is clicked
openModalButton === null || openModalButton === void 0 ? void 0 : openModalButton.addEventListener("click", function () {
    if (modal)
        modal.style.display = 'block';
});
// Close modal when close button is clicked
closeModalButton === null || closeModalButton === void 0 ? void 0 : closeModalButton.addEventListener("click", function () {
    if (modal)
        modal.style.display = 'none';
});
// Close modal when clicking outside of the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        if (modal)
            modal.style.display = 'none';
    }
});
// Form Submission
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var cnic = document.getElementById('cnic').value;
    var profilePictureInput = document.getElementById('profilePhoto');
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var outputProfilePhoto = document.getElementById('outputProfilePhoto');
    if (profilePictureFile && outputProfilePhoto) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if (outputProfilePhoto) {
                outputProfilePhoto.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                outputProfilePhoto.style.display = 'block';
            }
        };
        reader.readAsDataURL(profilePictureFile);
    }
    document.getElementById('outputName').innerHTML = "<b>Name:</b> ".concat(name);
    document.getElementById('outputEmail').innerHTML = "<b>Email:</b> ".concat(email);
    document.getElementById('outputPhone').innerHTML = "<b>Phone:</b> ".concat(phone);
    document.getElementById('outputCNIC').innerHTML = "<b>CNIC:</b> ".concat(cnic);
    document.getElementById('outputEducation').innerHTML = "<b>Education:</b> ".concat(education);
    document.getElementById('outputSkills').innerHTML = "<b>Skills:</b> ".concat(skills);
    document.getElementById('outputExperience').innerHTML = "<b>Experience:</b> ".concat(experience);
    if (resumeOutput)
        resumeOutput.style.display = 'block';
    if (modal)
        modal.style.display = 'none';
    resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.reset();
});
