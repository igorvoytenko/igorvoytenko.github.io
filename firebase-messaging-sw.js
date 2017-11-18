// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const config = {
    apiKey: "AIzaSyBJxdY_0VeoQeIElJZI066YewUarEiT0h8",
    authDomain: "push-test-2565e.firebaseapp.com",
    databaseURL: "https://push-test-2565e.firebaseio.com",
    projectId: "push-test-2565e",
    storageBucket: "push-test-2565e.appspot.com",
    messagingSenderId: "685799503083"
}
firebase.initializeApp(config)

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: payload,
        icon: '/firebase-logo.png'
    }

    return self.registration.showNotification(notificationTitle, notificationOptions);
})
