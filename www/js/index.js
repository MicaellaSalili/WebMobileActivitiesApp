var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        // Show device info
        document.getElementById('deviceInfo').textContent =
            `Model: ${device.model}, OS: ${device.platform} ${device.version}`;
        document.getElementById('addActivity').addEventListener('click', function() {
            var activity = prompt('Enter a new activity:');
            if (activity) {
                var div = document.createElement('div');
                div.className = 'activity';
                div.textContent = activity;
                document.getElementById('activityList').appendChild(div);
            }
        });
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