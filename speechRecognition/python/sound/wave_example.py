import wave;

obj = wave.open("output.wav", 'rb')

# print("Number of channels", obj.getnchannels())
# print("Sample width", obj.getsampwidth())
# print("Frame rate.", obj.getframerate())
# print("Number of frames", obj.getnframes())
# print("parameters:", obj.getparams())
# frames = obj.readframes(obj.getnframes())

print("Number of channels", obj.getnchannels())
print("Sample width", obj.getsampwidth())
print("Frame rate.", obj.getframerate())
print("Number of frames", obj.getnframes())
print("parameters:", obj.getparams())
print("Read all the frames:", obj.readframes(obj.getnframes()))

frames = obj.readframes(obj.getnframes())
print(len(frames) / obj.getsampwidth(), frames[0], type(frames[0]))
obj.close()


