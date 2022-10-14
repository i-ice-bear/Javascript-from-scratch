class data:
    def __init__(self, _age, _name, _state):
        self.age = _age
        self.name = _name
        self.state = _state
    def addInfo(self):
        print("adding info about" + self.name + " : "  + self.state + " : " + self.age)


addition = data("70","Addition","Dallas")
print(addition.age)