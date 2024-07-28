from flask import Flask, request, jsonify
from joblib import load
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained K-means model
model_path = os.path.join(os.path.dirname(__file__), 'kmeans_model.pkl')
kmeansmodel = load(model_path)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    correctCount = data['correctCount']
    incorrectCount = data['incorrectCount']
    x = [[correctCount, incorrectCount]]
    cluster = kmeansmodel.predict(x)[0]
    cluster_names = {0: 'Beginner', 1: 'Advanced', 2: 'Intermediate'}
    return jsonify({'cluster': cluster_names[cluster]})

if __name__ == '__main__':
    app.run(debug=True)
