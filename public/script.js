document.addEventListener('DOMContentLoaded', function() {
    // Function to set current year in footer
    function setCurrentYear() {
        const currentYear = new Date().getFullYear();
        const yearElements = document.querySelectorAll('#current-year, #current-year-feedback, #current-year-jobfinder');
        yearElements.forEach(element => {
            if (element) {
                element.textContent = currentYear;
            }
        });
    }

    setCurrentYear();

    // --- Start of Mobile Menu Toggle Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });

        // Optional: Close menu when a navigation link is clicked (useful for single-page apps or smooth scrolls)
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                }
            });
        });
    }
    // --- End of Mobile Menu Toggle Logic ---

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle job search form submission (index.html)
    const jobSearchForm = document.getElementById('jobSearchForm');
    if (jobSearchForm) {
        jobSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const keyword = document.getElementById('jobKeyword').value;
            const location = document.getElementById('jobLocation').value;

            let searchUrl = 'https://id.indeed.com/jobs?q='; // Default to Indeed

            if (keyword) {
                searchUrl += encodeURIComponent(keyword);
            }
            if (location) {
                searchUrl += '&l=' + encodeURIComponent(location);
            }

            // Open in a new tab
            window.open(searchUrl, '_blank');
        });
    }

    // Handle feedback form submission (feedback.html)
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // In a real application, you would send this data to a server.
            // For now, we'll just simulate a successful submission.
            const userName = document.getElementById('userName').value;
            const userEmail = document.getElementById('userEmail').value;
            const userSuggestion = document.getElementById('userSuggestion').value;

            console.log('Feedback Submitted:');
            console.log('Name:', userName);
            console.log('Email:', userEmail);
            console.log('Suggestion:', userSuggestion);

            const feedbackMessage = document.getElementById('feedbackMessage');
            if (feedbackMessage) {
                feedbackMessage.textContent = 'Terima kasih, ' + userName + '! Masukan Anda telah kami terima dan sangat berarti bagi kami.';
                feedbackMessage.style.display = 'block';
                feedbackForm.reset(); // Clear the form
            }

            // Optionally hide the message after a few seconds
            setTimeout(() => {
                if (feedbackMessage) {
                    feedbackMessage.style.display = 'none';
                }
            }, 7000);
        });
    }

    // Example of a simple dynamic content loading (optional, not strictly in your HTML)
    // If you had a section where you wanted to load recent blog posts or jobs
    // function loadRecentJobs() {
    //     // Simulate fetching data
    //     const jobs = [
    //         { title: "Web Developer", company: "Tech Solutions", location: "Jakarta" },
    //         { title: "Digital Marketing Specialist", company: "Creative Agency", location: "Remote" },
    //         { title: "Accountant", company: "Finance Corp", location: "Bandung" }
    //     ];
    //     const jobListElement = document.getElementById('recent-jobs-list');
    //     if (jobListElement) {
    //         jobListElement.innerHTML = jobs.map(job => `
    //             <li><strong>${job.title}</strong> at ${job.company} - ${job.location}</li>
    //         `).join('');
    //     }
    // }
    // loadRecentJobs(); // Call this function if you have a section for it
});

