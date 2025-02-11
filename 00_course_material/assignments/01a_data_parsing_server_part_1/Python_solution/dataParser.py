import os
import json
import csv
import xml.etree.ElementTree as ET
import yaml
import io

path = '00_course_material/assignments/01a_data_parsing_server_part_1/Data'

def read_files(path):
    try:
        files = os.listdir(path)
        for file in files:
            file_path = os.path.join(path, file)
            file_extension = file.split('.')[-1]
            parsed_data = parse_files(file_path, file_extension)
            print(parsed_data)
    except Exception as e:
        print(e)
        return None

def parse_files(file_path, extension):
    try:

        with open(file_path, 'r', encoding='utf-8') as f:
            fileContent = f.read()
    
        if extension == 'json':
            return json.loads(fileContent)
        elif extension == 'csv':
            return list(csv.reader(io.StringIO(fileContent)))
        elif extension == 'xml':
            return ET.fromstring(fileContent)
        elif extension in['yaml','yml']:
            return yaml.safe_load(fileContent)
        elif extension == 'txt':
            return fileContent
        else :
            return print('Invalid extension')
    except Exception as e:
        print(e)
        return None
    
read_files(path)