from flask import Flask, jsonify, request
import joblib
import pandas as pd

app = Flask(__name__)


# Load the trained model
model = joblib.load("NBAmodel.joblib")


@app.route("/predict", methods=["POST"])
def predict():
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
    return jsonify({"predictions": predictions.tolist()})


if __name__ == "__main__":
    app.run(debug=True)
