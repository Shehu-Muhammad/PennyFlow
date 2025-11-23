import { db } from './firebase-init.js';
import { collection, getDocs, setDoc, doc } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

const usersCol = collection(db, 'users');

export async function syncUserData(userId, state) {
  await setDoc(doc(db, 'users', userId), state);
}

export async function loadUserData(userId) {
  const snapshot = await getDocs(usersCol);
  return snapshot.docs.map(d => d.data());
}
