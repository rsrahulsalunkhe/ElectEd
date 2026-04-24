import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment,
  serverTimestamp,
} from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { db } from '@/lib/firebase';

// ─── User document ─────────────────────────────────────────────────

export async function ensureUserDoc(user: User): Promise<void> {
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
      lastActive: serverTimestamp(),
    });
  } else {
    await updateDoc(ref, { lastActive: serverTimestamp() });
  }
}

// ─── Progress document helpers ────────────────────────────────────

async function ensureProgressDoc(uid: string) {
  const ref = doc(db, 'userProgress', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      completedSteps: [],
      quizScores: [],
      bookmarkedTerms: [],
      chatCount: 0,
    });
  }
  return ref;
}

// ─── Quiz ─────────────────────────────────────────────────────────

export async function saveQuizScore(
  uid: string,
  category: string,
  score: number
): Promise<void> {
  const ref = await ensureProgressDoc(uid);
  await updateDoc(ref, {
    quizScores: arrayUnion({ category, score, date: new Date().toISOString() }),
  });
}

// ─── Steps ────────────────────────────────────────────────────────

export async function saveStepCompleted(uid: string, stepId: string): Promise<void> {
  const ref = await ensureProgressDoc(uid);
  await updateDoc(ref, { completedSteps: arrayUnion(stepId) });
}

export async function removeStepCompleted(uid: string, stepId: string): Promise<void> {
  const ref = await ensureProgressDoc(uid);
  await updateDoc(ref, { completedSteps: arrayRemove(stepId) });
}

// ─── Glossary bookmarks ───────────────────────────────────────────

export async function addBookmark(uid: string, term: string): Promise<void> {
  const ref = await ensureProgressDoc(uid);
  await updateDoc(ref, { bookmarkedTerms: arrayUnion(term) });
}

export async function removeBookmark(uid: string, term: string): Promise<void> {
  const ref = await ensureProgressDoc(uid);
  await updateDoc(ref, { bookmarkedTerms: arrayRemove(term) });
}

// ─── Chat ─────────────────────────────────────────────────────────

export async function incrementChatCount(uid: string): Promise<void> {
  const ref = await ensureProgressDoc(uid);
  await updateDoc(ref, { chatCount: increment(1) });
}

// ─── Read progress ────────────────────────────────────────────────

export async function getUserProgress(uid: string) {
  const ref = doc(db, 'userProgress', uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}
