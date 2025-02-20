from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/fastapiData")
def getFastAPIData():
    return { "data": "Data from FastAPI"} # this data is dictionary


# gets the data from the express API
@app.get("/expressApiData")
def getRequestExpressAPIData():
    response = requests.get("http://127.0.0.1:8080/expressData").json()

    return response 
