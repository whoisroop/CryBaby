import glob
import os

def clean():
    files = glob.glob("./snippet/*.wav")
    for file in files:
        os.remove(file)

    if(os.path.exists("audio.wav")): os.remove("./audio.wav")