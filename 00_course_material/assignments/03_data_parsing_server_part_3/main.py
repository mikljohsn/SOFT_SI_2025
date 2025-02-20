from fastapi import FastAPI
import requests

app = FastAPI()

baseURL = "http://127.0.0.1:8080/"

@app.get("/expressXML")
def getRequestExpressXML():
    response = requests.get(baseURL + "xml").json()

    return response 

@app.get("/expressCSV")
def getRequestExpressCSV():
    response = requests.get(baseURL + "csv").json()

    return response 

@app.get("/expressJSON")
def getRequestExpressJSON():
    response = requests.get(baseURL + "json").json()

    return response 

@app.get("/expressYML")
def getRequestExpressYML():
    response = requests.get(baseURL + "yml").json()

    return response 

@app.get("/expressYAML")
def getRequestExpressYAML():
    response = requests.get(baseURL + "yaml").json()

    return response 

@app.get("/expressTXT")
def getRequestExpressTXT():
    response = requests.get(baseURL + "txt").json()

    return response 