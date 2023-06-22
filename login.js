import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyChSNI3537bzlVKxl29lBjutnZZ8IO2EIM",
	authDomain: "airis-e6909.firebaseapp.com",
	databaseURL: "https://airis-e6909-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "airis-e6909",
	storageBucket: "airis-e6909.appspot.com",
	messagingSenderId: "6559941711",
	appId: "1:6559941711:web:ebe2be615868db062b963a",
	measurementId: "G-QQ5H2D5E5W"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log('Logged in:', user);
      })
      .catch((error) => {
        // Login failed
        setError(error.message);
      });
  };

  const handleCreateAccount = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Account creation successful
        const user = userCredential.user;
        console.log('Account created:', user);
      })
      .catch((error) => {
        // Account creation failed
        setError(error.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default Login;
