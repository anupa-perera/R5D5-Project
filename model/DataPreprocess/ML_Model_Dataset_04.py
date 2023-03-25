#!/usr/bin/env python
# coding: utf-8

# In[1]:


from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import datetime


# In[2]:


WORKING_DIR1  = "C:/Users/ASUS/Documents/GitHub/R5D5-Project/model/DataPreprocess/Datasets/NBA Player Stats - Regular.csv"


# In[3]:


df1 = pd.read_csv(WORKING_DIR1 , encoding="ISO-8859-1")


# In[4]:


df1.head()


# In[5]:


##Dropping non-useful features
drop_features = ['Player','Tm']
df1 = df1.drop(drop_features,axis=1)


# In[6]:


# Remove the rows that contain "#N/A" in the "salaries" column
df1.dropna(subset=["salary"], inplace=True)


# In[7]:


# Select the columns to be transformed
categorical_cols = ['Pos']
df_categorical = df1[categorical_cols]

# Perform one-hot encoding on the selected columns
df_encoded = pd.get_dummies(df_categorical)

# Concatenate the one-hot encoded columns with the rest of the DataFrame
df1 = pd.concat([df1, df_encoded], axis=1)

# Drop the original categorical columns
df1 = df1.drop(categorical_cols, axis=1)


# In[8]:


# Initialize the Scaler
scaler = MinMaxScaler()

# Fit and transform the scaler on the salary column
df1['salary'] = scaler.fit_transform(df1[['salary']])


# In[9]:


df1.info()


# In[10]:


# Finding the useful features to predict the salary
corre = df1.corr()
corre['salary'].sort_values(ascending=False)


# In[11]:


X = df1.drop('salary', axis=1)
y = df1['salary']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)


# In[12]:


df1.to_csv("ML_Model_Dataset_01/complete_data_model_NBA_Player_Stats_Regular.csv", index=False)
X_train.to_csv("ML_Model_Dataset_01/X_train04.csv", index=False)
X_test.to_csv("ML_Model_Dataset_01/X_test04.csv", index=False)
y_train.to_csv("ML_Model_Dataset_01/y_train04.csv", index=False)
y_test.to_csv("ML_Model_Dataset_01/y_test04.csv", index=False)


# In[ ]:




