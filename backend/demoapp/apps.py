from django.apps import AppConfig
# from .models import NBA_Player_Info
# from demoapp.models import Player

class DemoappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'demoapp'




# Create your views here.
# def test_view(request):
#     all_players = Player.objects.all()
#     t=0
#     for i in all_players:
#         print(t," ",i)
#         t+=1


# Retrieve all documents in the collection
# players = NBA_Player_Info.objects.all()

# Retrieve documents that match a specific query
# lakers_players = NBA_Player_Info.objects.filter(team='Los Angeles Lakers')
# print(lakers_players)

# Create a new document
# new_player = NBA_Player_Info(name='LeBron James', age=37, team='Los Angeles Lakers')
# new_player.save()

# Update an existing document
# player_to_update = NBA_Player_Info.objects.get(name='LeBron James')
# player_to_update.age = 38
# player_to_update.save()

# Delete a document
# player_to_delete = NBA_Player_Info.objects.get(name='LeBron James')
# player_to_delete.delete()
