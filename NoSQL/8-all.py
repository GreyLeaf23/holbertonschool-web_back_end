#!/usr/bin/env python3
"""
Module defines a function that lists all documents inside
a collection.
"""


def list_all(mongo_collection):
    """Lists all documents in a collection"""
    if not mongo_collection:
        return []
    return list(mongo_collection.find())


if __name__ == "__main__":
    list_all(mongo_collection)
