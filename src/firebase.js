import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKcNent7GbPKQvKsUsIhqHCyoRfokDtEU",
    authDomain: "fbauthonly-c11cb.firebaseapp.com",
    projectId: "fbauthonly-c11cb",
    storageBucket: "fbauthonly-c11cb.appspot.com",
    messagingSenderId: "346923057474",
    appId: "1:346923057474:web:405fecf9d10fdd9a84c8db",
    measurementId: "G-NZC1HDJP1J"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
