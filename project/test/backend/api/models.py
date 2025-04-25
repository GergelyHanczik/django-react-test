from django.db import models





class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True, max_length=100)
    position = models.CharField(max_length=50)
    department = models.CharField(max_length=50)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):

    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    title = models.CharField(max_length=100, default="Untitled")
    description = models.TextField()
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='appointments')

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.employee.name}:{self.title}  (From:{self.start_time} -> Until:{self.end_time})"

class Department(models.Model):
    name = models.CharField(max_length=100)
    manager = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='managed_departments')
    description = models.TextField()
    
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.manager.name})"