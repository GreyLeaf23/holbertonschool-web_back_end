#!/usr/bin/env python3
"""
Module defines a function that changes all topics of a school document
based on the name.
"""


def update_topics(mongo_collection, name, topics):
    """Changes all topics of a school document based on the name"""
    if not mongo_collection:
        return None
    return mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )


if __name__ == "__main__":
    update_topics(mongo_collection, name, topics)
