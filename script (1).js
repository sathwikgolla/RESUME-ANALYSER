// Handle Resume Upload and Analysis
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const resumeFile = document.getElementById('resumeFile').files[0];
    if (!resumeFile) {
        alert("Please upload a resume file.");
        return;
    }

    // Show loading indication
    document.getElementById('resultText').innerHTML = '<p>Analyzing your resume... Please wait.</p>';
    document.getElementById('analysisResults').style.display = 'block';

    // Simulate AI analysis (you would replace this with an actual API call)
    setTimeout(function () {
        // This is where the AI analysis logic or API call would occur.
        const analysisResult = analyzeResume(resumeFile);
        
        // Display the result (this is a placeholder)
        document.getElementById('resultText').innerHTML = `
            <h3>Analysis Summary</h3>
            <p><strong>Score: </strong> ${analysisResult.score}</p>
            <p><strong>Key Suggestions: </strong> ${analysisResult.suggestions}</p>
            <p><strong>Skills Match: </strong> ${analysisResult.skillsMatch}</p>
        `;
    }, 2000); // Simulate delay for AI processing
});

// Placeholder for AI resume analysis logic
function analyzeResume(file) {
    // In a real-world scenario, here you'd send the file to the server or an AI API
    // and analyze its content. This is a mock of that process.
    
    return {
        score: '85%',
        suggestions: 'Improve your summary and add more quantifiable achievements.',
        skillsMatch: 'Excellent match for software engineering roles.'
    };
}

// Handle Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Simulate login process (replace with actual authentication logic)
    setTimeout(function () {
        alert("Login successful!");
        // Redirect to home page after login (or dashboard, etc.)
        window.location.href = "index.html";
    }, 1000);
});

// Handle Register Form Submission
document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (!username || !email || !password) {
        alert("Please fill in all the fields.");
        return;
    }

    // Simulate registration process (replace with actual registration logic)
    setTimeout(function () {
        alert("Registration successful! Please log in.");
        window.location.href = "login.html";
    }, 1000);
});

// Toggle Between Login and Register Forms
document.getElementById('toggleForm')?.addEventListener('click', function (event) {
    event.preventDefault();

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        this.textContent = "Don't have an account? Sign Up";
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        this.textContent = "Already have an account? Login";
    }
});
// Handle form submission
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the file input
    const fileInput = document.getElementById('resumeFile');
    const file = fileInput.files[0];

    if (file) {
        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append("resume", file);

        // Show loading state while processing
        document.getElementById('resultText').innerHTML = 'Analyzing your resume...';
        document.getElementById('analysisResults').style.display = 'block';

        // Send the file to the server (assuming the server is running on /analyze endpoint)
        fetch('/analyze', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Display analysis results
            document.getElementById('resultText').innerHTML = `<p>Your Resume Score: <strong>${data.score}</strong></p>`;
            
            // Show improvement tips
            const tipsList = document.getElementById('tipsList');
            tipsList.innerHTML = '';  // Clear previous tips
            data.tips.forEach(tip => {
                const li = document.createElement('li');
                li.textContent = tip;
                tipsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultText').innerHTML = 'There was an error analyzing your resume. Please try again.';
        });
    }
});
document.getElementById('resumeTemplatesLink').addEventListener('click', function (event) {
    event.preventDefault();

    // Hide all sections
    document.querySelectorAll('.page-section').forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the Resume Templates section with the iframe
    document.getElementById('resumeTemplates').style.display = 'block';
});

// Handle form submission for the resume upload (same as before)
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const fileInput = document.getElementById('resumeFile');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append("resume", file);

        document.getElementById('resultText').innerHTML = 'Analyzing your resume...';
        document.getElementById('analysisResults').style.display = 'block';

        fetch('/analyze', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultText').innerHTML = `<p>Your Resume Score: <strong>${data.score}</strong></p>`;

            const tipsList = document.getElementById('tipsList');
            tipsList.innerHTML = '';
            data.tips.forEach(tip => {
                const li = document.createElement('li');
                li.textContent = tip;
                tipsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultText').innerHTML = 'There was an error analyzing your resume. Please try again.';
        });
    }
});
document.getElementById('resumeTemplatesLink').addEventListener('click', function (event) {
    event.preventDefault();

    // Hide other sections if they are visible
    document.querySelectorAll('.page-section').forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the Resume Templates section with the iframe
    document.getElementById('resumeTemplates').style.display = 'block';
});
// This function handles switching between sections
document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target section based on the data-target attribute
        const targetSection = document.getElementById(link.getAttribute('data-target'));

        // Hide all sections
        document.querySelectorAll('section').forEach(function (section) {
            section.style.display = 'none';
        });

        // Show the selected section
        targetSection.style.display = 'block';
    });
});

// Handle form submission for the resume upload (same as before)
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const fileInput = document.getElementById('resumeFile');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append("resume", file);

        document.getElementById('resultText').innerHTML = 'Analyzing your resume...';
        document.getElementById('analysisResults').style.display = 'block';

        fetch('/analyze', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultText').innerHTML = `<p>Your Resume Score: <strong>${data.score}</strong></p>`;

            const tipsList = document.getElementById('tipsList');
            tipsList.innerHTML = '';
            data.tips.forEach(tip => {
                const li = document.createElement('li');
                li.textContent = tip;
                tipsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultText').innerHTML = 'There was an error analyzing your resume. Please try again.';
        });
    }
});



