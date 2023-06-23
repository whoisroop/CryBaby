from flask import Flask, render_template, request
import pickle
import pyrebase
import firesetup, split, cleanup
import model
import os

# pip install -r requirements.txt

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/predict", methods = ["GET"])
def predict():
    cleanup.clean()         #Delete the saved file.
    firesetup.download()    #Download the audio file.
    split.snippet()         #Split the audio file.
    # PREDICT
    pValue = str(model.predict())
    print(pValue)     
    # return render_template("show.html", pValue = pValue)
    return {"value": pValue}

@app.route("/api", methods = ["GET"])
def api():
    print("Fetch: API")
    return {
        "id":0,
        "name": "Roop"
    }
    
if __name__ == '__main__':
    app.run()