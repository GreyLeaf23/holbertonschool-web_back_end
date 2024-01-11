#!/usr/bin/env python3
"""
Module defines a function that provides some stats about Nginx logs stored
in MongoDB.
"""
from pymongo import MongoClient


# Provides some stats about Nginx logs stored in MongoDB
client = MongoClient('mongodb://localhost:27017')
logs_db = client.logs
nginx_collection = logs_db.nginx

total_logs = nginx_collection.count_documents({})
print("{} logs".format(total_logs))

print("Methods:")
methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
for method in methods:
    method_count = nginx_collection.count_documents({"method": method})
    print("\tmethod {}: {}".format(method, method_count))

status_logs = nginx_collection.count_documents({"method": "GET", "path": "/status"})
print("{} status check".format(status_logs))


if __name__ == "__main__":
    client = MongoClient('mongodb://localhost:27017')
