#!/usr/bin/env python
# coding: utf-8

# In[1]:


from sklearn.preprocessing import MinMaxScaler


# In[2]:


from sklearn.model_selection import train_test_split


# In[3]:


#Importing basic libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
import datetime


# In[4]:


#Preprocess data in nba2k-full dataset


# In[5]:


WORKING_DIR1  = "C:/Users/ASUS/Documents/GitHub/R5D5-Project/model/DataPreprocess/Datasets/nba2k-main-data-sheet.csv"


# In[6]:


df1 = pd.read_csv(WORKING_DIR1)


# In[7]:


df1.head()


# In[8]:


df1.info()


# In[9]:


# Drop the "college" column
df1.drop("college", axis=1, inplace=True)

# Drop the "version" column
df1.drop("version", axis=1, inplace=True)


# In[10]:


# fill the missing values in columns (TWITTER_FAVORITE_COUNT,TWITTER_RETWEET_COUNT)
df1['TWITTER_FAVORITE_COUNT'].fillna(df1['TWITTER_FAVORITE_COUNT'].mean(), inplace=True)
df1['TWITTER_RETWEET_COUNT'].fillna(df1['TWITTER_RETWEET_COUNT'].mean(), inplace=True)
df1['TWITTER_FOLLOWER_COUNT_MILLIONS'].fillna(df1['TWITTER_FOLLOWER_COUNT_MILLIONS'].mean(), inplace=True)


# In[11]:


#convert columns to integers
features = ['draft_round','draft_peak']
df1[features] = df1[features].replace('Undrafted','0')
df1[features] = df1[features].astype(int)


# In[12]:


df1.info()


# In[13]:


df1.info()


# In[14]:


## Creating a copy of dataframe for feature enginnering


# In[15]:


df1_copy = df1.copy()

# Removing the un-necessary data in the dataset(salary,height,weight)
df1_copy['height'] = df1_copy['height'].apply(lambda x: float(x.split('/')[1]))
df1_copy['weight'] = df1_copy['weight'].apply(lambda x: float(x.split('/')[1].split('kg')[0]))


# In[16]:


# Creating new column for Experience
for index,value in enumerate(df1['draft_year']):
    df1_copy.loc[index,'Experience']= int( (datetime.datetime.today() - datetime.datetime.strptime(str(value),'%Y')).days / 365.25)


# In[17]:


# Creating new column for Age
for index,value in enumerate(df1['b_day']):
    value = value.replace(" ", "")
    df1_copy.loc[index,'Age']= int( (datetime.datetime.today() - datetime.datetime.strptime(value,'%M/%d/%Y')).days / 365.25)


# In[18]:


df1_copy.head()


# In[19]:


# Creating new column for BMI by using Weight and Height of the player
df1_copy['bmi'] = df1_copy['weight'] / (df1_copy['height']**2)


# In[20]:


#The resulting correlation matrix shows the linear relationship between each pair of columns
#(positive value indicates a positive relationship and negative value indicates a negative relationship while value close to zero indicates no relationship)


# In[21]:


df1_copy.corr()


# In[22]:


# Data Visualization


# In[23]:


# x axis represent the range of values, y axis represent the number of occurences in those ranges


# In[24]:


df1_copy.hist(bins=30,figsize=(20,15))
plt.show()


# In[25]:


# Finding the useful features to predict the salary
corre = df1_copy.corr()
corre['salary'].sort_values(ascending=False)


# In[26]:


# Players who are not in the team, assigning the value to No team
df1_copy.fillna('no team',inplace=True)


# In[27]:


df1_copy['position'].value_counts()

# Creating a new column for Team salary by using grouping team and salary columns

salary = df1_copy[['salary', 'team']]
new_sal = salary.groupby('team').mean().reset_index()
boundaries = [np.NINF, 7E+6, 7.6E+6, 8.1E+6, 9E+6, 9.5E+6, np.Inf]
labels = [1,2,3,4,5,6]
new_sal['team_salary'] = pd.cut(salary.groupby('team').mean().\
                                reset_index()['salary'], bins=boundaries,labels=labels)
new_sal.drop(['salary'], axis = 1, inplace = True)
#merging this categories to data
df1_copy = df1_copy.merge(new_sal, on = 'team', how = 'left')


# In[28]:


# Grouping the players by using Country , this will help how many players are from outside USA
# Changing the values of the country field which is outside of USA , since only 25% players are from Outside USA, so we are going 
# to have only two categories
df1_copy.loc[df1_copy['country'] != 'USA','country'] = 'not USA'


# In[29]:


df1.head()


# In[30]:


df1_copy.head()


# In[31]:


##Dropping non-useful features
drop_features = ['full_name','jersey','team','b_day']
df1_copy = df1_copy.drop(drop_features,axis=1)


# In[32]:


df1_copy.info()


# In[33]:


## Two variables are created x for features and y for target variables
#X = nba_full_data_copy.drop(['salary'],axis=1)
#y = nba_full_data_copy['salary']


# In[34]:


# preprocess categorical data into numerical (Position,Country)


# In[35]:


# Select the columns to be transformed
categorical_cols = ['position','country']
df_categorical = df1_copy[categorical_cols]

# Perform one-hot encoding on the selected columns
df_encoded = pd.get_dummies(df_categorical)

# Concatenate the one-hot encoded columns with the rest of the DataFrame
df1_copy = pd.concat([df1_copy, df_encoded], axis=1)

# Drop the original categorical columns
df1_copy = df1_copy.drop(categorical_cols, axis=1)


# In[36]:


df1_copy.info()


# In[37]:


df1_copy.head()


# In[38]:


## use MinMaxScaler to normalize the data in salary column to value in range(0-1),increase ML model training time and accurecy


# In[39]:


# Initialize the Scaler
scaler = MinMaxScaler()

# Fit and transform the scaler on the salary column
df1_copy['salary'] = scaler.fit_transform(df1_copy[['salary']])


# In[40]:


df1_copy.head()


# In[41]:


#split data into training and testing (data is usually divided in to x,y as features and target variables, random_state is 0 so every time code runs same split happens)


# In[42]:


X = df1_copy.drop('salary', axis=1)
y = df1_copy['salary']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)


# In[43]:


# Show the first 5 rows of the training set
print("Training set:")
X_train.head()
y_train.head()

# Show the first 5 rows of the testing set
print("Testing set:")
X_test.head()
y_test.head()


# In[44]:


#exporting to csv file optional
df1_copy.to_csv("ML_Model_Dataset_01/complete_data_model.csv", index=False)
X_train.to_csv("ML_Model_Dataset_01/X_train.csv", index=False)
X_test.to_csv("ML_Model_Dataset_01/X_test.csv", index=False)
y_train.to_csv("ML_Model_Dataset_01/y_train.csv", index=False)
y_test.to_csv("ML_Model_Dataset_01/y_test.csv", index=False)

