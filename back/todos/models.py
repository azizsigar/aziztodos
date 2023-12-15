from django.db import models

class Todo(models.Model):
    body = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=True)
    attachment = models.FileField(upload_to='attachments/', null=True, blank=True)
    due_datetime = models.DateTimeField(null=True, blank=True)
    is_completed = models.BooleanField(default=False)
    related_url = models.URLField(blank=True)
    color = models.CharField(max_length=10, blank=True)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    repeat_period = models.CharField(max_length=20, blank=True)
    viewed = models.BooleanField(default=False)
    priority = models.PositiveIntegerField(default=1)
    location = models.URLField(blank=True)
    
    def __str__(self):
        return  f"{self.body} - {self.created.strftime('%H:%M %d %B')}"  # created alanını özel bir biçimde gösterme
    
    class Meta:
        ordering = ['-created']  # created'e göre ters sıralama
    