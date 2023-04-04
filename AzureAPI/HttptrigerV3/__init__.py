import logging
import joblib
import pandas as pd
import azure.functions as func
import os

# Import the ML model
model = joblib.load("HttptrigerV3\modelNBA.joblib")

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Received POST Requet.')

    try:
        req_body = req.get_json()

        # Convert input data to DataFrame
        df = pd.DataFrame(req_body, index=[0])

        # Make predictions
        predictions = model.predict(df)

        # Denormalize the predictions
        salary_min = 50000
        salary_max = 45780966
        predictions_denorm = int(predictions[0] * (salary_max - salary_min) + salary_min)

        # Format the output with comma separators
        predictions_formatted = "{:,.0f}".format(predictions_denorm)

        # Return the predictions as a JSON object
        return func.HttpResponse(f"{predictions_formatted}", status_code=200)
    except ValueError:
        pass

    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
