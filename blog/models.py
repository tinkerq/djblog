from django.contrib.auth.models import User
from django.db import models

class Artical (models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    image= models.URLField()
    author= models.ForeignKey(User)

    def __unicode__(self):
        return  self.title
    