import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
