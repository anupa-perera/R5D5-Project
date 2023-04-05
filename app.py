from flask import Flask, jsonify, request, render_template
import joblib
import pandas as pd
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


# Load the trained model
model = joblib.load("NBAmodel.joblib")



@app.route( '/predict', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type'])
def predict_salary():
    # your prediction logic here
    response = jsonify({'predicted': 50000})
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', '*')
   
    # Get the input data
    data = request.json

    # Print the input data in the PyCharm terminal
    print("Incoming data: ", data)

    # Convert input data to DataFrame
    df = pd.DataFrame(data, index=[0])

    print("data: ", pd)

    # Make predictions
    predictions = model.predict(df)

    print("Predictions: ", predictions)

    # Return the predictions as a JSON object
    return jsonify({'prediction': predictions.tolist()})


if __name__ == "__main__":
    app.run(port=5000,debug=True)
