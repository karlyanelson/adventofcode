import sys
import os

_default_max_iterations = 10
_application_root_paths = ["/2024"]


def _walk_up_tree(
    current_directory: str,
    desired_directories: list[str],
    iteration: int = 0,
    max_iterations: int = _default_max_iterations,
):
    if iteration > max_iterations:
        raise Exception(
            f"Could not find {desired_directories} within {max_iterations} levels of the current directory"
        )

    found_match = [
        desired_directory
        for desired_directory in desired_directories
        if current_directory.endswith(desired_directory)
    ]
    if len(found_match):
        return current_directory

    return _walk_up_tree(
        os.path.abspath(os.path.join(current_directory, "..")),
        desired_directories,
        iteration + 1,
        max_iterations,
    )


def include_parent_directory_in_path():
    parent_path = _walk_up_tree(os.path.realpath(__file__), _application_root_paths)
    if parent_path not in sys.path:
        sys.path.append(parent_path)

