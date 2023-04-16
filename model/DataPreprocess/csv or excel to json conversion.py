import pandas as pd


datapath = r"C:\Users\ASUS\Documents\GitHub\R5D5-Project\model\DataPreprocess\nba2k-main-data-sheet.csv"
outpath = r"C:\Users\ASUS\Documents\GitHub\R5D5-Project\model\DataPreprocess\nba2kDB.json"


data = pd.read_csv(datapath)
# print(data.columns)


name = data.full_name
rating = data.rating
jersey = data.jersey
team = data.team
position = data.position
birthday = data.b_day
height = data.height
weight = data.weight
salary = data.salary
country = data.country
draft_year = data.draft_year
draft_round = data.draft_round
draft_peak = data.draft_peak
college = data.college
game_version = data.version


container = { }

x = 0

while x< len(name):

    container[name[x]] = [
        {"Rating: ":rating[x],},
        {"Jersey: ": jersey[x],},
        {"Team: ": team[x],},
        {"Position: ": position[x],},
        {"Birthday: ", birthday[x],},
        {"Height": height[x],},
        {"Weight: ": weight[x],},
        {"Salary: ": salary[x],},
        {"Country: ":country[x]},
        {"draft_year: ": draft_year[x]},
        {"draft_round; ":draft_round[x]},
        {"draft_peak: ":draft_peak[x]},
        {"college: ": college[x]},
        {"Game_version: ": game_version[x]}
        ]



    x = x+1


df = pd.DataFrame(container)
df.to_json(outpath, indent=4)

