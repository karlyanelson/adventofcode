from utils.parse_input import parse_input

def get_data(input = None):
    parsed = parse_input("day_1", input) 

    left = []  
    right = []

    for item in parsed:
        split = item.split('   ')
        left.append((split[0]))
        right.append((split[1]))  

    left_list = list(map(int, left))
    right_list = list(map(int, right)) 

    left_sorted = sorted(left_list)
    right_sorted = sorted(right_list) 

    print("Formatted data for this day")

    return left_sorted, right_sorted