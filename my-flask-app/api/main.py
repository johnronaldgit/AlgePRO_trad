from flask import Flask, request, jsonify
import joblib
import os

app = Flask(__name__)

# Load the model
model_path = os.path.join(os.path.dirname(__file__), 'model', 'kmeans_model.pkl')
kmeans_model = joblib.load(model_path)

def predict_cluster(model, data):
    centers = model.cluster_centers_
    distances = [sum((value - center[index]) ** 2 for index, value in enumerate(data)) for center in centers]
    return distances.index(min(distances))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    correct_count = data['correctCount']
    incorrect_count = data['incorrectCount']
    cluster = predict_cluster(kmeans_model, [correct_count, incorrect_count])
    cluster_names = {0: 'Beginner', 1: 'Advanced', 2: 'Intermediate'}
    return jsonify({'cluster': cluster_names[cluster]})

if __name__ == '__main__':
    app.run(debug=True)
