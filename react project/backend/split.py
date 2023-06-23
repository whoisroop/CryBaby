import wave, math
import glob

# filePath = "./hungry.wav"
# folderPath = "./Snippet"
# fileList = glob.glob(folderPath + "/*.wav")
PATH = "./audio.wav"
DESTINATION = "./snippet"

def clip(PATH, DESTINATION):
    audio = wave.open(PATH, 'rb')
    duration = ((audio.getnframes() / audio.getframerate()))
    sampling_rate = audio.getframerate()
    signal_wave = audio.readframes(-1)

    total_frames = len(signal_wave)
    snippet = []

    frames_second = audio.getsampwidth()*audio.getframerate()
    print(frames_second , " - " , total_frames)

    i = 0
    while (i + frames_second) <= total_frames:
        segment = signal_wave[i : (i + frames_second)]

        snippet.append(segment)
        i += frames_second

    N = len(snippet)

    filename = ((PATH.split('/')[-1]).split('\\')[-1]).split('.')[:-1]

    for i in range(N):
        clip = wave.open(DESTINATION + "/" + str(filename) + "_" + str(i) + ".wav", 'wb')
        clip.setnchannels(audio.getnchannels())
        clip.setsampwidth(audio.getsampwidth())
        clip.setframerate(audio.getframerate())

        clip.writeframes(snippet[i])

        clip.close()

def snippet():
    clip(PATH, DESTINATION)
    return glob.glob(DESTINATION + "/*.wav")