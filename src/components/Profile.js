import React, { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import algeprologo from '../assets/algeprologo.png';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.error('No such document!');
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchScores = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userEmail = user.email;
        const scoresCollection = `users/${userEmail}/scores`;
        const lessons = [1, 2, 3, 4, 5]; // List of lesson numbers
        const scoresData = [];

        for (let lessonNumber of lessons) {
          const lessonDocRef = doc(db, scoresCollection, `lesson${lessonNumber}`);
          const lessonDocSnap = await getDoc(lessonDocRef);
          if (lessonDocSnap.exists()) {
            const lessonData = lessonDocSnap.data();
            scoresData.push({
              lesson: lessonNumber,
              preTestScore: lessonData.PreTestScores?.correctCount ?? 'Not yet taken',
              postTestScore: lessonData.PostTestScores?.correctCount ?? 'Not yet taken',
              knowledgeLevel: lessonData.knowledgeLevel ?? 'N/A',
            });
          } else {
            scoresData.push({
              lesson: lessonNumber,
              preTestScore: 'Not yet taken',
              postTestScore: 'Not yet taken',
              knowledgeLevel: 'N/A',
            });
          }
        }
        setScores(scoresData);
      }
    } catch (error) {
      console.error('Error fetching scores:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchUserData();
      await fetchScores();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const getKnowledgeLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-red-500';
      case 'Intermediate':
        return 'text-orange-500';
      case 'Advanced':
        return 'text-green-500';
      default:
        return '';
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="flex items-center mb-8">
        <img src={algeprologo} alt="AlgePRO Logo" className="w-16 h-16 mr-4" />
        <div>
          <p className="text-xl font-bold">{auth.currentUser?.email}</p>
          <p className="text-lg text-gray-600">Student</p>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader"></div>
          <style>{`
            .loader {
              border: 16px solid #f3f3f3;
              border-top: 16px solid #3498db;
              border-radius: 50%;
              width: 120px;
              height: 120px;
              animation: spin 2s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Test Scores and Knowledge Levels</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-center">Lesson</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-center">Pre-Test Score</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-center">Post-Test Score</th>
                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-center">Knowledge Level</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200 text-center text-lg font-bold">{score.lesson}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center text-lg font-bold">{score.preTestScore}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center text-lg font-bold">{score.postTestScore}</td>
                  <td className={`py-2 px-4 border-b border-gray-200 text-center text-lg font-bold ${getKnowledgeLevelColor(score.knowledgeLevel)}`}>
                    {score.knowledgeLevel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Profile;
