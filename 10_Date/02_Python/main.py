#import datetime

#print(datetime.datetime.now()) ##datetime er et modul og datetime (2) er klassen

from datetime import datetime

current_time = datetime.now()
print(current_time)

print(datetime.now().strftime('%Y-%m-%dT%H:%M:%S'))

