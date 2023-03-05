from django.db import models


class Player(models.Model):
    name = models.CharField(max_length=100,blank=False, default='')
    rating = models.CharField(max_length=50,blank=False, default='')
    jersey = models.CharField(max_length=50,blank=False, default='')
    team = models.CharField(max_length=80,blank=False, default='')
    position = models.CharField(max_length=20,blank=False, default='')
    birth_day = models.CharField(max_length=100,blank=False, default='')
    height = models.CharField(max_length=100,blank=False, default='')
    weight = models.CharField(max_length=100,blank=False, default='')
    salary = models.CharField(max_length=100,blank=False, default='')
    country = models.CharField(max_length=100,blank=False, default='')
    draft_year = models.CharField(max_length=100,blank=False, default='')
    draft_round = models.CharField(max_length=100,blank=False, default='')
    draft_peak = models.CharField(max_length=100,blank=False, default='')
    college = models.CharField(max_length=100,blank=False, default='')
    version = models.CharField(max_length=100,blank=False, default='')
    TWITTER_FAVORITE_COUNT = models.CharField(max_length=100)
    TWITTER_RETWEET_COUNT = models.CharField(max_length=100,blank=False, default='')
    TWITTER_FOLLOWER_COUNT_MILLIONS = models.CharField(max_length=100,blank=False, default='')

    class Meta:
        db_table = 'NBA_Player_Info'

def test_view(request):
    all_players = Player.objects.all()
    t = 0
    for i in all_players:
        print(t, " ", i)
        t += 1
test_view()

