from fastapi import FastAPI
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_methods=["GET"], # allows GET requests
    allow_headers=["*"],  # Allows all headers
    allow_credentials=True  # Allows cookies to be sent with requests
) 

@app.get("/timestamp")
def timestamp():
    return { "data": datetime.now() }

