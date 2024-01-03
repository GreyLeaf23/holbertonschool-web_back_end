#!/usr/bin/env python3
"""
Module creates type-annotated function that takes a list of floats
and returns their sum as a float.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """ Function returns sum of list of floats """
    return sum(input_list)
