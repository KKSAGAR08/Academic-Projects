import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"

from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np 
import io  
from werkzeug.utils import secure_filename
import psutil

app = Flask(__name__)
CORS(app)
process = psutil.Process(os.getpid())

def memory():
    return process.memory_info().rss / (1024 * 1024)


# Load trained model
print(f"Memory before loading: {memory():.2f} MB")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "trained_model_V22.keras")
model = tf.keras.models.load_model(model_path)
print("Model loaded successfully.")
print(f"Memory after loading: {memory():.2f} MB")
print(f"Used by model: {memory():.2f} MB")

# Class names (plant diseases)
class_names = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
    'Chili__healthy', 'Chili__leaf curl', 'Chili__leaf spot', 'Chili__whitefly',
    'Chili__yellowish', 'Coffee__Rust', 'Coffee__healthy', 'Coffee__red spider mite',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
    'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy',
    'Peach___Bacterial_spot', 'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy',
    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 'Strawberry___Leaf_scorch',
    'Strawberry___healthy', 'Tomato___Bacterial_spot', 'Tomato___Early_blight',
    'Tomato___Late_blight', 'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot',
    'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy'
]

# Lazy model loading for low memory servers (Render free)
def predict_disease(image):
    try:
        print('Predicting....')
        model_path = os.path.join(BASE_DIR, "trained_model_V22.keras")
        model = tf.keras.models.load_model(model_path)

        # Preprocess image
        image = image.resize((128, 128))
        input_arr = np.array(image)
        input_arr = np.expand_dims(input_arr, axis=0)

        # Make prediction
        predictions = model.predict(input_arr)
        result_index = np.argmax(predictions)

        # Free memory
        tf.keras.backend.clear_session()

        return class_names[result_index]
    except Exception as e:
        print("Prediction error:", e)
        return None

@app.route('/')
def home():
    return "Flask backend running on Render."

@app.route('/predict', methods=['POST'])
def predict():
    print('Predicting....')
    print("Incoming request files:", request.files)

    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        image = tf.keras.utils.load_img(io.BytesIO(file.read()), target_size=(128, 128))
        result = predict_disease(image)

        if result is None:
            return jsonify({'error': 'Prediction failed'}), 500

        return jsonify({'prediction': result})
    except Exception as e:
        print("Exception:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
