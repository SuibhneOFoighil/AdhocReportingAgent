"""
Base agent implementation.
"""

class Agent:
    def __init__(self, name: str):
        self.name = name
    
    def run(self):
        raise NotImplementedError("Agent must implement run method")