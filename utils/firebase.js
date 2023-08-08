import "firebase/messaging";
import firebase from "firebase/app";
import {getLocalStorage, setLocalStorage} from "@/utils/index";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase.apps.length) {
      // Initialize the Firebase app with the credentials
      firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = getLocalStorage("fcm_token");
        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }
        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          // const fcm_token = await messaging.getToken({
          //   vapidKey: process.env.NEXT_PUBLIC_FIREBASE_WEB_PUSH_CERTIFICATE_KEY_PAIR_ID,
          // });
          const fcm_token = await messaging.getToken();

            console.log('fcm_token', fcm_token)
          // Set token in our local storage
          if (fcm_token) {
            setLocalStorage("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };