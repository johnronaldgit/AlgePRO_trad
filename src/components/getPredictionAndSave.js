import axios from 'axios';
import { db, auth } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

const getPredictionAndSave = async (correctCount, incorrectCount, lessonNumber) => {
  try {
    // Make a request to the prediction API
    const response = await axios.post('http://127.0.0.1:5000/predict', {
      correctCount,
      incorrectCount
    });
    
    const knowledgeLevel = response.data.cluster;
    
    // Save the prediction to Firebase
    const user = auth.currentUser;
    if (user) {
      const userEmail = user.email;
      const lesson = `lesson${lessonNumber}`;
      const scoresRef = doc(db, 'users', userEmail, 'scores', lesson);
      
      await setDoc(scoresRef, {
        KnowledgeLevel: knowledgeLevel
      }, { merge: true });
      
      console.log('Knowledge level saved successfully');
    }
  } catch (error) {
    console.error('Error getting prediction or saving knowledge level:', error);
  }
};
