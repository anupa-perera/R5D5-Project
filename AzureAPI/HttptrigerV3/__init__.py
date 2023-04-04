import logging
import joblib
import pandas as pd
import azure.functions as func

# Import the ML model
model = joblib.load("./HttptrigerV3/model.joblib")

def predict(req_body):

    # Convert input data to DataFrame
    logging.info('Converting the data into DataFrame.')
    df = pd.DataFrame(req_body, index=[0])

    # Make predictions
    logging.info('Making predictions.')
    predictions = model.predict(df)

    # Denormalize the predictions
    logging.info('Denormalize the predictions.')
    salary_min = 50000
    salary_max = 45780966
    predictions_denorm = int(predictions[0] * (salary_max - salary_min) + salary_min)

    # Format the output with comma separators
    logging.info('Preparing the result.')
    predictions_formatted = "{:,.0f}".format(predictions_denorm)
    
    return predictions_formatted


def main(request: func.HttpRequest
    ) -> func.HttpResponse:
    
    if request.method == "POST":
        try:
            logging.info('Started processing the request.')
            data = request.get_json()
            
            if data == '':
                raise ValueError
            else:
                logging.info('Process completed successfully.')
                prediction = predict(data)
                
                return func.HttpResponse(f"{prediction}", status_code=200)
                   
        except ValueError:
            logging.info('Got an empty body. The process has been terminated.')
            return func.HttpResponse("Empty body, please make sure that your request is valid!", status_code=404)
        
        except Exception:
            logging.info('Got an invalid request. The process has been terminated.')
            return func.HttpResponse("Invalid request, please make sure that your request is valid!", status_code=400) 
    else:
        logging.info('Received a GET request.')
        return func.HttpResponse("The server is up and running.", status_code=200)
