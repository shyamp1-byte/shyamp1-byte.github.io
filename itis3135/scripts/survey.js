function validateForm() {
    const fields = [
        'name', 'mascot', 'image', 'imageCaption', 'personalBackground',
        'professionalBackground', 'academicBackground', 'webDevelopment',
        'computerPlatform', 'agreement'
    ];
    for (let field of fields) {
        if (!document.getElementById(field).value) {
            alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`);
            return false;
        }
    }
    return true;
}

function displayResults() {
    const resultDiv = document.querySelector('.result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <h2>Your Introduction Page</h2>
        <p>Name: ${document.getElementById('name').value}</p>
        <p>Mascot: ${document.getElementById('mascot').value}</p>
        <img src="${URL.createObjectURL(document.getElementById('image').files[0])}" alt="Image">
        <p>Image Caption: ${document.getElementById('imageCaption').value}</p>
        <p>Personal Background: ${document.getElementById('personalBackground').value}</p>
        <p>Professional Background: ${document.getElementById('professionalBackground').value}</p>
        <p>Academic Background: ${document.getElementById('academicBackground').value}</p>
        <p>Background in Web Development: ${document.getElementById('webDevelopment').value}</p>
        <p>Primary Computer Platform: ${document.getElementById('computerPlatform').value}</p>
        <p>Courses: ${Array.from(document.getElementsByClassName('course')).map((c) => c.value).join(', ')}</p>
        <p>Funny Thing: ${document.getElementById('funnyThing').value}</p>
        <p>Anything Else?: ${document.getElementById('anythingElse').value}</p>
    `;
    document.getElementById('resetLink').style.display = 'block';
}

document.getElementById('resetLink').addEventListener('click', function () {
    document.getElementById('introForm').reset();
    const resultDiv = document.querySelector('.result');
    resultDiv.classList.add('hidden');
    this.style.display = 'none';
});


document.getElementById('introForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        displayResults();
    }
});

function addCourse() {
    const coursesContainer = document.getElementById('coursesContainer');
    const newCourseInput = document.createElement('input');
    newCourseInput.type = 'text';
    newCourseInput.className = 'course';
    newCourseInput.placeholder = 'Enter course name';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function () {
        coursesContainer.removeChild(newCourseInput);
        coursesContainer.removeChild(deleteButton);
    };
    coursesContainer.appendChild(newCourseInput);
    coursesContainer.appendChild(deleteButton);
}

document.getElementById('addCourseBtn').addEventListener('click', addCourse);
