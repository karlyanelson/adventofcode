def count_in_rows(rows:list[str]) -> int:
    total = 0
    for row in rows:
        total += row.count('XMAS')
        
    return total


def count_in_diagonals(matrix) -> int:
    # https://stackoverflow.com/questions/6313308/get-all-the-diagonals-in-a-matrix-list-of-lists-in-python
    
    
    # matrix.diagonal returns the top-left-to-lower-right diagonal "i"
    # according to this diagram:
    #
    #  0  1  2  3  4 ...
    # -1  0  1  2  3
    # -2 -1  0  1  2
    # -3 -2 -1  0  1
    #  :
    #
    # You wanted lower-left-to-upper-right and upper-left-to-lower-right diagonals.
    #
    # The syntax matrix[slice,slice] returns a new array with elements from the sliced ranges,
    # where "slice" is Python's [start[:stop[:step]] format.

    # "::-1" returns the rows in reverse. ":" returns the columns as is,
    # effectively vertically mirroring the original array so the wanted diagonals are
    # lower-right-to-uppper-left.
    #
    # Then a list comprehension is used to collect all the diagonals.  The range
    # is -x+1 to y (exclusive of y), so for a matrix like the example above
    # (x,y) = (4,5) = -3 to 4.
    diags = [matrix[::-1,:].diagonal(i) for i in range(-matrix.shape[0]+1,matrix.shape[1])]

    # Now back to the original array to get the upper-left-to-lower-right diagonals,
    # starting from the right, so the range needed for shape (x,y) was y-1 to -x+1 descending.
    diags.extend(matrix.diagonal(i) for i in range(matrix.shape[1]-1,-matrix.shape[0],-1))

    # Another list comp to convert back to Python lists from numpy arrays,
    # so it prints what you requested.
    print([n.tolist() for n in diags])

def answer_part_1(string):
    in_rows = count_in_rows(string)
    
    return in_rows

