window.addEventListener('load', () => {

    let form = document.getElementById('empForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let employeeId = document.getElementById("employeeId").value
        console.log('ID: ' + employeeId)

        let fullName = document.getElementById("fullName").value
        console.log('Name: ' + fullName)

        let ext = document.getElementById("ext").value
        console.log('Extension: ' + ext)

        let email = document.getElementById("email").value
        console.log('Email: ' + email)

        let department = document.getElementById("department").value
        console.log('Department: ' + department);

    });
});