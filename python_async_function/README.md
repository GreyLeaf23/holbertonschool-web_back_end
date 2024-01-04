# Python - Async Learning!



# General Questions:



## What is async and await syntax?
In Python, `async` and `await` are used for handling asynchronous code, which is code that can perform tasks independently of the main
application flow.

The `async` keyword is used to declare a function as a "coroutine". Coroutines are special functions that can be paused and resumed, allowing
other code to run in the meantime.

```python
async def my_coroutine():
    # Coroutine body here
```

The `await` keyword is used within an `async` function to pause the execution of the function until the awaited task is complete. `await` can
only be used with an "awaitable" object like those returned by `async` functions.

```python
async def my_coroutine():
    result = await some_async_function()
    print(result)
```

In the above example, `some_async_function()` is expected to be an async function (a coroutine). The execution of `my_coroutine` pauses at
`await some_async_function()`, and resumes when the awaited function is done, with `result` being the return value of `some_async_function()`.

Remember, `await` can only be used inside an `async` function.




## How to execute an async program with asyncio?
**asyncio** is a library in Python that provides features for dealing with concurrent code using coroutines, multiplexing I/O access over
sockets and other resources, running network clients and servers, and other related primitives.

The main goal of asyncio is to provide an easy way to handle asynchronous I/O operations. This can be particularly useful when you have tasks
that can be done independently of one another and you want to manage them concurrently to improve performance.


To execute an asynchronous program with `asyncio` in Python, you need to create an event loop which will run your asynchronous function
(coroutine). Here's a basic example:

```python
import asyncio

async def my_coroutine():
    # Coroutine body here
    print("Hello, World!")

# Create an event loop
loop = asyncio.get_event_loop()

# Run the coroutine
loop.run_until_complete(my_coroutine())

# Close the loop
loop.close()
```

In Python 3.7 and later, you can also use the `asyncio.run()` function, which creates the event loop, runs the coroutine and closes the loop
for you:

```python
import asyncio

async def my_coroutine():
    # Coroutine body here
    print("Hello, World!")

# Run the coroutine
asyncio.run(my_coroutine())
```

Remember, the `asyncio.run()` function should be the main entry point for your asynchronous program, and it should ideally only be called
once.




## How to run concurrent coroutines?
To run multiple coroutines concurrently in Python, you can use the `asyncio.gather()` function. This function returns a future aggregating
results from the given coroutine objects and will finish when all the coroutines have finished.

Here's an example:

```python
import asyncio

async def my_coroutine(n):
    await asyncio.sleep(n)  # Simulate I/O operation using sleep
    return f"Coroutine {n} completed"

async def main():
    # Schedule three calls concurrently
    tasks = [my_coroutine(i) for i in range(3)]
    results = await asyncio.gather(*tasks)  # Unpack list of tasks
    print(results)

# Python 3.7+
asyncio.run(main())
```

In this example, `main()` creates three tasks that run concurrently. `asyncio.gather()` waits for all of them to complete and returns their
results as a list. The `asyncio.run(main())` line runs the `main()` coroutine, which includes all the tasks.

Remember, `asyncio.run()` should be used as the main entry point for your asyncio program, and it should ideally only be called once.




## How to create asyncio tasks?
In Python's asyncio, you can create tasks using the `asyncio.create_task()` function. A Task is a subclass of Future that wraps a coroutine.
A task is responsible for executing a coroutine object in an event loop.

Here's an example:

```python
import asyncio

async def my_coroutine(n):
    await asyncio.sleep(n)  # Simulate I/O operation using sleep
    return f"Coroutine {n} completed"

async def main():
    # Create tasks
    tasks = [asyncio.create_task(my_coroutine(i)) for i in range(3)]

    # Gather results
    results = await asyncio.gather(*tasks)
    print(results)

# Python 3.7+
asyncio.run(main())
```

In this example, `main()` creates three tasks that run concurrently. `asyncio.gather()` waits for all of them to complete and returns their
results as a list. The `asyncio.run(main())` line runs the `main()` coroutine, which includes all the tasks.

Remember, `asyncio.run()` should be used as the main entry point for your asyncio program, and it should ideally only be called once.




## How to use the random module?
The `random` module in Python provides various functions for generating random numbers. Here are some examples:

1. **Generate a random float between 0 and 1:**

```python
import random

print(random.random())
```

2. **Generate a random integer between two integers:**

```python
import random

print(random.randint(1, 10))  # This will print a random integer between 1 and 10
```

3. **Choose a random element from a list:**

```python
import random

my_list = [1, 2, 3, 4, 5]
print(random.choice(my_list))  # This will print a random element from the list
```

4. **Shuffle a list in place:**

```python
import random

my_list = [1, 2, 3, 4, 5]
random.shuffle(my_list)
print(my_list)  # This will print the list with its elements shuffled
```

5. **Generate a random float within a specific range:**

```python
import random

print(random.uniform(1, 10))  # This will print a random float between 1 and 10
```

Remember, the `random` module should not be used for generating random numbers in security-sensitive contexts. Use `secrets` module for such
cases.
