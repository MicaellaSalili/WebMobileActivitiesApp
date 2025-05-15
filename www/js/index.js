var app = {
    // Activity data with detailed descriptions
    activities: {
        1: {
            title: "PUP Hymn Website",
            description: "Developed a responsive website to showcase the Polytechnic University of the Philippines (PUP) Hymn. Features include embedded audio playback, lyrics display, and a clean, user-friendly interface built with HTML, CSS, and JavaScript."
        },
        2: {
            title: "Jakes Coffee Shop",
            description: "Created a web-based interface for a fictional coffee shop named Jakes. The app includes a dynamic menu, order form, and cart functionality, built using HTML, CSS, and JavaScript with a focus on UX design."
        },
        3: {
            title: "PUP Kiosk Map",
            description: "Designed an interactive map application for navigating kiosks on the PUP campus. The app uses HTML5 Canvas or SVG for rendering and JavaScript for interactivity, providing a mobile-friendly experience."
        },
        4: {
            title: "Calculator",
            description: "Built a web-based calculator supporting basic arithmetic operations (addition, subtraction, multiplication, division). Implemented with JavaScript for logic and styled with CSS for a modern look."
        },
        5: {
            title: "Registration Form",
            description: "Developed a user registration form with client-side validation for fields like name, email, and password. Built using HTML forms, CSS for styling, and JavaScript for validation and submission handling."
        }
    },

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        // Show device info
        document.getElementById('deviceInfo').textContent =
            `Model: ${device.model}, OS: ${device.platform} ${device.version}`;


        // Add click listeners to activities
        var activities = document.querySelectorAll('.activity');
        activities.forEach(function(activity) {
            activity.addEventListener('click', function() {
                var id = this.getAttribute('data-id');
                app.showActivityDetails(id);
            });
        });

        // Modal close button
        document.querySelector('.close-btn').addEventListener('click', function() {
            document.getElementById('activityModal').style.display = 'none';
        });

        // Close modal when clicking outside
        document.getElementById('activityModal').addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    },

    showActivityDetails: function(id) {
        var activity = this.activities[id];
        if (activity) {
            document.getElementById('modalTitle').textContent = activity.title;
            document.getElementById('modalDescription').textContent = activity.description;
            document.getElementById('activityModal').style.display = 'flex';
        }
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

app.initialize();