# Python - Variable Annotations Learning!



# General Questions:



## What are type annotations in Python 3?
Type annotations in Python 3 are a way of explicitly specifying the expected type of a variable, function argument, or function return value.
They are not enforced by the Python runtime, but can be used by tools like type checkers, IDEs, and linters to help identify potential
errors. Here's an example:

```python
def greet(name: str) -> str:
    return 'Hello, ' + name
```

In this function, `name` is expected to be a string (`str`), and the function is expected to return a string. These are the type annotations.




## How you can use type annotations to specify function signatures and variable types?
You can use type annotations in Python to specify the expected types of function arguments and return values, as well as the types of
variables. This is done by appending a colon and the type immediately after the variable or function argument, and by appending an arrow and
the type before the colon in a function definition to specify the return type.

Here's an example:
```python
from typing import List

def add_numbers(numbers: List[int]) -> int:
    return sum(numbers)

my_numbers: List[int] = [1, 2, 3, 4, 5]
total: int = add_numbers(my_numbers)
```

You can use type annotations in Python to specify the expected types of function arguments and return values, as well as the types of variables. This is done by appending a colon and the type immediately after the variable or function argument, and by appending an arrow and the type before the colon in a function definition to specify the return type.

Here's an example:

```python
from typing import List

def add_numbers(numbers: List[int]) -> int:
    return sum(numbers)

my_numbers: List[int] = [1, 2, 3, 4, 5]
total: int = add_numbers(my_numbers)
```

In this example, the `add_numbers` function is annotated to take a list of integers as an argument and return an integer. The `my_numbers`
variable is annotated as a list of integers, and the `total` variable is annotated as an integer.




## What is duck typing in Python 3?
Duck typing in Python is a programming concept that determines the type of an object at runtime by its behavior (methods and properties), not
by its class or type definition.

The name comes from the phrase "If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck."

In Python, an object's suitability is determined by the presence of certain methods and properties, rather than the actual type of the object.

Here's an example:

```python
class Duck:
    def quack(self):
        return "Quack!"

class Dog:
    def quack(self):
        return "I'm a dog, but I can quack!"

def make_it_quack(animal):
    print(animal.quack())

duck = Duck()
dog = Dog()

make_it_quack(duck)  # Outputs: Quack!
make_it_quack(dog)   # Outputs: I'm a dog, but I can quack!
```

In this example, even though `Dog` is not of type `Duck`, it's still considered suitable in the `make_it_quack` function because it has a
`quack` method. This is duck typing.




## How to validate your code with MyPy?
MyPy is a static type checker for Python. You can use it to validate your code as follows:

1. First, install MyPy using pip:

```bash
pip install mypy
```

2. Then, you can run MyPy on your Python file. For example, if your file is named `main.py`, you would run:

```bash
mypy main.py
```

MyPy will then check your code and output any type errors it finds. Remember that MyPy uses the type annotations in your code to check for
errors, so make sure your code is properly annotated.

Note: MyPy can be integrated with many IDEs (like Visual Studio Code) to provide real-time feedback on your code as you write it.

