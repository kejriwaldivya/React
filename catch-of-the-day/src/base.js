import Rebase from 're-base';
import firebase from 'firebase';


const config = {
    
    apiKey: "AIzaSyD_vYE2rBA6zR0UTxW7lusYknZ43hH-jPg",
    authDomain: "catch-of-the-day-divya-k.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-divya-k.firebaseio.com"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default {base};
