from flask import Flask, jsonify, request
from flask_cors import CORS
from functions import *

import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

curr_dir = os.getcwd()


app =Flask(__name__)

CORS(app, resources={r"/api/captcha": {"origins": "http://localhost:5173"}}, supports_credentials=True)

working_dir = curr_dir



@app.route('/api/captcha', methods = ['GET', 'POST'])
def captcha():

    if request.method == "POST":
        
        filename = request.form.get("filename")
        
        if filename == "undefined":
             return jsonify({"Filename not Received"})
        else:    
            characters = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            img_path = os.path.join(working_dir, "test", filename)
            predicted_classes = predict_test_image(img_path, num_characters=5)
            captcha = "".join([characters[i] for i in predicted_classes])

            print(f"Filename: {filename}, Captcha: {captcha}")
            return jsonify({"filename": filename, "captcha": captcha})
             

    elif request.method == "GET":
        with open(r"/Users/adithnr/Documents/GitHub/Capture/data/records.json", "r") as  f:
                return f.read()




if __name__ == "__main__":
    app.run(debug=True, port=8080)