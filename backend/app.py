from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import os  # Import os for model path handling
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# Load trained model
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "trained_model_V22.keras")
model = tf.keras.models.load_model(model_path)
print("Model loaded successfully.")

# Class names
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

def predict_disease(image):
    image = image.resize((128, 128))  # Resize image to 128x128
    input_arr = np.array(image)  # Convert to array
    input_arr = np.expand_dims(input_arr, axis=0)  # Convert to batch format
    predictions = model.predict(input_arr)
    result_index = np.argmax(predictions)
    return class_names[result_index]

@app.route('/')
def index():
    return "Flask backend running"

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Open the image directly without saving
        image = tf.keras.preprocessing.image.load_img(file.stream, target_size=(128, 128))
        result = predict_disease(image)
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
