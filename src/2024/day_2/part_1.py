def check_if_safe(report: list[int]) -> bool:
    # The levels are either all increasing or all decreasing.
    # Any two adjacent levels differ by at least one and at most three.

    ## WHAT THE ROBOTS SUGGESTED
    increasing = all(1 <= report[i] - report[i - 1] <= 3 for i in range(1, len(report)))
    decreasing = all(1 <= report[i - 1] - report[i] <= 3 for i in range(1, len(report)))
    return increasing or decreasing

    ## MY ORIGINAL BELOW
    # increases = []
    # decreases = []
    # for i in range(1, len(report)):
    #     prev = report[i - 1]
    #     cur = report[i]

    #     diff = prev - cur
        
    #     if abs(diff) > 3 or diff == 0:
    #     if diff == 0 or abs(diff) > 3:
    #         break
    #     elif diff >= 1:
    #         decreases.append(diff)
    #     elif diff <= 1:
    #         increases.append(diff)
    #     else:
    #         is_safe = False
    #         break
        
    # is_safe = False
    # all_decreasing = len(decreases) == len(report) - 1 and len(increases) == 0
    # all_increasing = len(increases) == len(report) - 1 and len(decreases) == 0

    # is_safe = all_decreasing or all_increasing

    # return is_safe

def answer_part_1(reports: list[list[int]]):
    safe_reports = 0

    for report in reports:
        is_safe = check_if_safe(report)
        if is_safe:
            safe_reports += 1
    
    return safe_reports

