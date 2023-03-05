from django.contrib import admin
from .models import name,jersey,rating,team
# Register your models here.


admin.site.register(name)
admin.site.register(rating)
admin.site.register(jersey)
admin.site.register(team)
