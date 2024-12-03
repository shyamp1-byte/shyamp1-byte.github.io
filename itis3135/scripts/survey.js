function validateForm() {
    const fields = [
        'name', 'mascot', 'image', 'image-caption', 'personal-background',
        'professional-background', 'academic-background', 'web-development',
        'computer-platform', 'agreement'
    ];
    for (let field of fields) {
        const inputElement = document.getElementById(field);
        if (inputElement && (!inputElement.value || (inputElement.type === 'checkbox' && !inputElement.checked))) {
            alert(`${field.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} is required.`);
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
        <img src="${URL.createObjectURL(document.getElementById('image').files[0])}" alt="Uploaded Image">
        <p>Image Caption: ${document.getElementById('image-caption').value}</p>
        <p>Personal Background: ${document.getElementById('personal-background').value}</p>
        <p>Professional Background: ${document.getElementById('professional-background').value}</p>
        <p>Academic Background: ${document.getElementById('academic-background').value}</p>
        <p>Background in Web Development: ${document.getElementById('web-development').value}</p>
        <p>Primary Computer Platform: ${document.getElementById('computer-platform').value}</p>
        <p>Courses: ${Array.from(document.querySelectorAll('.course')).map((c) => c.value).join(', ')}</p>
        <p>Funny Thing: ${document.getElementById('funny-thing').value}</p>
        <p>Anything Else?: ${document.getElementById('anything-else').value}</p>
    `;
    document.getElementById('reset-link').classList.remove('hidden');
}

document.getElementById('reset-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('intro-form').reset();
    const resultDiv = document.querySelector('.result');
    resultDiv.classList.add('hidden');
    this.classList.add('hidden');
});

document.getElementById('intro-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        displayResults();
    }
});

function addCourse() {
    const coursesContainer = document.getElementById('courses-container');
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

const addCourseBtn = document.getElementById('addCourseBtn');
if (addCourseBtn) {
    addCourseBtn.addEventListener('click', addCourse);
}
