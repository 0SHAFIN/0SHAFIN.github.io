const schoolBTN = document.getElementById('school');
const collegeBTN = document.getElementById('college');
const universityBTN = document.getElementById('university');

schoolBTN.addEventListener('click', () => {
    window.location.href = 'school.html';
});

collegeBTN.addEventListener('click', () => {
    window.location.href = 'college.html';
});

universityBTN.addEventListener('click', () => {
    window.location.href = 'univarsity.html';
});
