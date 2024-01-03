#!/usr/bin/env python3
"""
Module creates type-annotated function that takes a float argument
and returns the floor of the float.
"""
import math


def floor(n: float) -> int:
    """ Function returns floor of float """
    return math.floor(n)
