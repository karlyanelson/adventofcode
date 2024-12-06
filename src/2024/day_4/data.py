import numpy as np
from utils.parse_input import parse_input

from utils.get_raw_input import get_raw_input


def get_data(input = None):
    rows = parse_input("day_4", input) 

    print(f"rows: {rows}")

    data = []

    for row in rows:
        new_row = []
        for letter in row:
            new_row.append(letter)
        
        data.append(new_row)


    # print(f"Data: {data}")

    matrix = np.array(data)

    print(f"matrix: {matrix}")

    diagonal = matrix.diagonal()

    print(f"diagonal: {diagonal}")

    return rows, matrix, diagonal