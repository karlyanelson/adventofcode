from utils.parse_input import parse_input

def get_data(input = None):
    parsed = parse_input("day_2", input) 

    reports: list[list[int]] = []

    for line in parsed:
        items = line.split()
        mapped_to_num = map(int, items)
        formatted_as_list = list(mapped_to_num)
        reports.append(formatted_as_list)

    print("Formatted data for this day")

    return reports