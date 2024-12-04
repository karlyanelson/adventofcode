from utils.parse_input import parse_input

def get_data(input = None):
    data = input

    if not input:
        with open('../day_3/input.txt', 'r') as file:
            data = file.read() 

    return data