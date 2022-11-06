import requests
from api_02 import *

filename = "BeKind.mp3"
audio_url = upload(filename)

save_transcript(audio_url, 'file_title')