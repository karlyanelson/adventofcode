def count_in_rows(rows:list[str]) -> int:
    total = 0
    for row in rows:
        total += row.count('XMAS')
        
    return total

def answer_part_1(string):
    in_rows = count_in_rows(string)
    
    return in_rows

