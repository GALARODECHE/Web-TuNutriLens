import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp, 
  getDocs, 
  query, 
  orderBy, 
  limit,
  Timestamp 
} from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase App singleton
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Use the database ID specified in configuration if defined
export const db = firebaseConfig.firestoreDatabaseId 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

export interface WaitlistRecord {
  id?: string;
  fullName: string;
  email: string;
  platform: 'ios' | 'android' | 'both';
  mainGoal?: string;
  accessCode: string;
  createdAt: any;
  emailStatus: 'queued' | 'sent' | 'pending_batch';
  source?: string;
  userAgent?: string;
}

/**
 * Saves a waitlist lead to Cloud Firestore.
 * Returns the document ID.
 */
export async function saveWaitlistLead(data: {
  fullName: string;
  email: string;
  platform: 'ios' | 'android' | 'both';
  mainGoal?: string;
  accessCode: string;
}): Promise<string> {
  try {
    const leadsCol = collection(db, 'waitlist_leads');
    const docRef = await addDoc(leadsCol, {
      fullName: data.fullName.trim(),
      email: data.email.trim().toLowerCase(),
      platform: data.platform,
      mainGoal: data.mainGoal || 'Mejora general y comida real',
      accessCode: data.accessCode,
      emailStatus: 'queued', // Queued for automatic launch emailing
      source: 'web_modal_prioritario',
      createdAt: serverTimestamp(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving lead to Firestore:', error);
    throw error;
  }
}

/**
 * Retrieve recent registrations count or list for live indicators
 */
export async function getRecentWaitlistCount(): Promise<number> {
  try {
    const leadsCol = collection(db, 'waitlist_leads');
    const snapshot = await getDocs(query(leadsCol, limit(500)));
    return snapshot.size;
  } catch (e) {
    return 0;
  }
}
