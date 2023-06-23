# Configure Firebase Storage
import pyrebase

# config = {
#     "apiKey": "AIzaSyC8B16omJkhojt7Q11O_6Bje3RfYPczLY4",
#     "authDomain": "infant-cry.firebaseapp.com",
#     "projectId": "infant-cry",
#     "storageBucket": "infant-cry.appspot.com",
#     "messagingSenderId": "924299630619",
#     "appId": "1:924299630619:web:b403b6568c393b707280be",
#     "measurementId": "G-X8EMZP81FW",
#     "databaseURL": ""
# }

# MAVANI FIREBASE:
config = {
    "apiKey": "AIzaSyBCJkSktQIrC9ggTA3A2BgWMKWT7JNut3g",
    "authDomain": "documents-upload-c952c.firebaseapp.com",
    "projectId": "documents-upload-c952c",
    "storageBucket": "documents-upload-c952c.appspot.com",
    "messagingSenderId": "204410116443",
    "appId": "1:204410116443:web:bdf1e072fe503f6606a27e",
    "measurementId": "G-6S3K4DJS5S",
    "databaseURL": ""
}

def download():
    firebase = pyrebase.initialize_app(config)
    storage = firebase.storage()

    path = "cry/cry.wav"
    storage.child(path).download(path="./audio/", filename="audio.wav")

    return storage