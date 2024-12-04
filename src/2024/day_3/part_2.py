def _check_if_safe(report: list[int]) -> bool:
    # The levels are either all increasing or all decreasing.
    # Any two adjacent levels differ by at least one and at most three.

    increasing = all(1 <= report[i] - report[i - 1] <= 3 for i in range(1, len(report)))
    decreasing = all(1 <= report[i - 1] - report[i] <= 3 for i in range(1, len(report)))
    return increasing or decreasing

def check_if_safe_with_problem_dampener(report: list[int]) -> bool:
    # Now, the same rules apply as before, 
    # except if removing a single level from an unsafe report would make it safe, 
    # the report instead counts as safe.

    result = False
    initial_safe_check = _check_if_safe(report)
    if initial_safe_check:
        result = True
    else:
        for i in range(len(report)):
            temp = report.copy()
            temp.pop(i)
            is_safe = _check_if_safe(temp)
            if is_safe:
                result = True
                break
    
    return result


def answer_part_2(reports: list[list[int]]):
    safe_reports = 0

    for report in reports:
        is_safe = check_if_safe_with_problem_dampener(report)
        if is_safe:
            safe_reports += 1
    
    return safe_reports

