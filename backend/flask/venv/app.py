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

    # Denormalize the predictions
    salary_min = 50000
    salary_max = 45780966
    predictions_denorm = int(predictions[0] * (salary_max - salary_min) + salary_min)


    print("Predictions: ", predictions_denorm)

    # Format the output with comma separators
    predictions_formatted = "{:,.0f}".format(predictions_denorm)

    # Return the predictions as a JSON object
    return jsonify({"predictions": predictions_formatted})


if __name__ == "__main__":
    app.run(debug=True)
