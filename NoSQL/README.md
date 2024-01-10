# NoSQL Learning!



# General Questions:



## What NoSQL means?
NoSQL stands for "Not Only SQL". NoSQL is a type of database that allows you to store and retrieve data in different ways that are not
possible with traditional SQL (or relational) databases. It's great for handling big data and real-time web applications. Instead of tables,
NoSQL databases can use document, key-value, graph formats, and more.




## What is difference between SQL and NoSQL?
SQL (Structured Query Language) and NoSQL (Not Only SQL) are both used for managing data, but they have significant differences:

1. **Data Structure**: SQL databases use structured data that is stored in tables, while NoSQL databases can handle unstructured data and
store it in several ways (like key-value pairs, wide-column, graph, or document).

2. **Scalability**: SQL databases are typically scaled by enhancing the hardware of the server (vertical scaling), while NoSQL databases are
designed to expand across multiple servers for increased demand (horizontal scaling).

3. **Schema**: SQL databases require a predefined schema based on which the data is arranged and stored. NoSQL databases, on the other hand,
have dynamic schemas for unstructured data.

4. **ACID Properties**: SQL databases follow ACID (Atomicity, Consistency, Isolation, Durability) properties, which guarantee that all
database transactions are processed reliably. NoSQL databases prioritize performance and scalability over ACID properties.

5. **Complexity of Queries**: SQL databases are good for complex queries as they have a powerful query language. In contrast, NoSQL databases
are not as good for complex queries.

6. **Consistency**: SQL databases are consistent, and NoSQL databases are eventually consistent.

Remember, the choice between SQL and NoSQL databases depends on the specific requirements of your project.




## What is ACID?
ACID is an acronym in computer science that stands for Atomicity, Consistency, Isolation, and Durability. These are a set of properties that guarantee that database transactions are processed reliably.

1. **Atomicity**: This means that a transaction is treated as a single, indivisible unit, which either succeeds completely, or fails completely. If any part of the transaction fails, the entire transaction fails, and the database state is left unchanged.

2. **Consistency**: This ensures that a transaction brings the database from one valid state to another. The database should satisfy a set of integrity constraints.

3. **Isolation**: This property ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially.

4. **Durability**: This ensures that once a transaction has been committed, it will remain committed even in the case of a system failure (like a power outage or crash).

These properties are important in a database system as they ensure the reliability of transactions in all situations.




## What is a document storage?
Document storage in the context of NoSQL databases refers to a method of storing data in a semi-structured way. Each record and its
associated data is thought of as a "document". In a document store database, each document is assigned a unique key, which is used to
retrieve the document.

These documents are stored in formats like JSON (JavaScript Object Notation), BSON (Binary JSON), XML, or YAML. They can contain many
different key-value pairs, or key-array pairs, or even nested documents.

This type of storage is schema-less, meaning the data in the document can be structured in any way, not necessarily the same way as other
documents in the database. This provides a lot of flexibility and scalability, making document stores well-suited for handling big data and
complex data structures. Examples of document store databases include MongoDB and CouchDB.




## What are NoSQL types?
There are four main types of NoSQL databases:

1. **Document databases**: They store data in documents similar to JSON (JavaScript Object Notation). Examples include MongoDB and CouchDB.

2. **Key-Value stores**: These are the simplest type of NoSQL database. Every single item in the database is stored as an attribute name (or
'key'), together with its value. Examples include Redis and DynamoDB.

3. **Wide-Column stores**: These databases store data in columns instead of rows. They are optimized for queries over large datasets, and are
often used to store very large amounts of data. Examples include Cassandra and HBase.

4. **Graph databases**: These are used to store information about networks, such as social connections. Graph databases include Neo4J and
Amazon Neptune.

Different types of NoSQL databases are designed to solve different kinds of problems, and their use depends on the specific needs of the
application.




## What are benefits of a NoSQL database?
NoSQL databases offer several benefits:

1. **Scalability**: NoSQL databases are designed to expand horizontally, meaning they can handle higher load by spreading data across more
servers.

2. **Flexibility**: NoSQL databases typically have flexible schemas that allow you to store complex data structures like nested arrays and
documents.

3. **Performance**: NoSQL databases can provide faster data operations as they can avoid the network latency associated with joining tables
and other operations in SQL databases.

4. **Big Data**: NoSQL databases are often a good fit for working with large amounts of data and high-velocity data.

5. **Real-time Applications**: NoSQL databases can provide lower latency and high throughput, ideal for real-time applications.

6. **Variety of Data Models**: Different types of NoSQL databases (document, key-value, columnar, graph) allow for using the most suitable
type for the specific needs of an application.

Remember, the choice between SQL and NoSQL databases depends on the specific requirements of your project.




## How to query information from a NoSQL database?
Querying information from a NoSQL database depends on the type of NoSQL database you are using as each type has its own query language or
API. Here are examples for some popular NoSQL databases:

1. **MongoDB (Document Database)**: MongoDB uses a JSON-like document structure with optional schemas and JavaScript as its query language.
Here's an example of querying for all documents with a field "name" equal to "John":

```javascript
db.collection('users').find({ name: 'John' });
```

2. **Redis (Key-Value Store)**: Redis uses its own set of commands for querying data. Here's an example of getting the value of a key "myKey":

```bash
GET myKey
```

3. **Cassandra (Wide-Column Store)**: Cassandra uses a language called CQL (Cassandra Query Language) that is similar to SQL. Here's an
example of querying for all columns from a table "users" where the "name" is 'John':

```sql
SELECT * FROM users WHERE name = 'John';
```

4. **Neo4j (Graph Database)**: Neo4j uses a language called Cypher for querying data. Here's an example of querying for all nodes with a
label "User" and a property "name" equal to 'John':

```cypher
MATCH (n:User {name: 'John'}) RETURN n;
```

Remember to replace the database, collection/table, and field/key names with your actual database structure.




## How to insert/update/delete information from a NoSQL database?
The operations to insert, update, or delete data from a NoSQL database depend on the specific type of NoSQL database you are using. Here are
examples for some popular NoSQL databases:

1. **MongoDB (Document Database)**:

   - Insert:
     ```javascript
     db.collection('users').insertOne({ name: 'John', age: 30 });
     ```
   - Update:
     ```javascript
     db.collection('users').updateOne({ name: 'John' }, { $set: { age: 31 } });
     ```
   - Delete:
     ```javascript
     db.collection('users').deleteOne({ name: 'John' });
     ```

2. **Redis (Key-Value Store)**:

   - Insert/Update (they are the same operation in Redis):
     ```bash
     SET myKey myValue
     ```
   - Delete:
     ```bash
     DEL myKey
     ```

3. **Cassandra (Wide-Column Store)**:

   - Insert:
     ```sql
     INSERT INTO users (name, age) VALUES ('John', 30);
     ```
   - Update:
     ```sql
     UPDATE users SET age = 31 WHERE name = 'John';
     ```
   - Delete:
     ```sql
     DELETE FROM users WHERE name = 'John';
     ```

4. **Neo4j (Graph Database)**:

   - Insert:
     ```cypher
     CREATE (n:User {name: 'John', age: 30})
     ```
   - Update:
     ```cypher
     MATCH (n:User {name: 'John'}) SET n.age = 31
     ```
   - Delete:
     ```cypher
     MATCH (n:User {name: 'John'}) DELETE n
     ```

Remember to replace the database, collection/table, and field/key names with your actual database structure.




## How to use MongoDB?
To use MongoDB, you need to follow these steps:

1. **Installation**: First, you need to install MongoDB on your machine. You can download it from the official MongoDB website.

2. **Starting the Server**: After installation, you can start the MongoDB server by running `mongod` in your terminal.

3. **Connecting to the Server**: You can connect to the MongoDB server using a MongoDB client. If you're using JavaScript, you might use the
MongoDB Node.js driver. Here's an example:

```javascript
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```

4. **Performing CRUD Operations**: Once connected, you can perform create (insert), read (query), update, and delete operations on your
MongoDB database. Here are some examples:

   - Insert:
     ```javascript
     const doc = { name: 'John', age: 30 };
     collection.insertOne(doc, function(err, result) {
       console.log("Inserted a document into the collection.");
     });
     ```
   - Query:
     ```javascript
     collection.find({}).toArray(function(err, docs) {
       console.log("Found the following records");
       console.log(docs)
     });
     ```
   - Update:
     ```javascript
     collection.updateOne({ name : 'John' }, { $set: { age : 31 } }, function(err, result) {
       console.log("Updated the document with the field 'name' equal to 'John'");
     });
     ```
   - Delete:
     ```javascript
     collection.deleteOne({ name : 'John' }, function(err, result) {
       console.log("Removed the document with the field 'name' equal to 'John'");
     });
     ```

Remember to replace `<username>`, `<password>`, and `cluster0.mongodb.net/test` with your actual MongoDB connection details.
