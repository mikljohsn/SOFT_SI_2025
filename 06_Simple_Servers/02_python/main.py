from fastapi import FastAPI # type: ignore


app = FastAPI()


@app.get("/")
def root():
    return {"data": "Hello World"}

@app.get("/greetings")
def greetings():
    return {"data": "hello greetings"}