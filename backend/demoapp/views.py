from django.shortcuts import render
from demoapp.models import Player


#Create your views here.
def test_view(request):
    all_players = Player.objects.all()
    t = 0
    for i in all_players:
        print(t, " ", i)
        t += 1
test_view()



# def my_view(request):
#     my_object = Player.objects.first()

#     if my_object is not None:
#         name = my_object.name
#     else:
#         name = "No name provided"

#     context = {
#         'name': name,
#     }

#     return render(request, 'my_template.html', context)

