from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=50)
    token = models.CharField(max_length=50)
    user_id = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    user_picture = models.CharField(max_length=50)
    # expire_date = models.CharField()

    def __str__(self):
        return self.name