#!/usr/bin/env python3
"""
Module defines a function that returns the list of school having a specific
topic.
"""


def schools_by_topic(mongo_collection, topic):
    """Returns the list of school having a specific topic"""
    if not mongo_collection:
        return []
    return mongo_collection.find({"topics": topic})


if __name__ == "__main__":
    schools_by_topic(mongo_collection, topic)
