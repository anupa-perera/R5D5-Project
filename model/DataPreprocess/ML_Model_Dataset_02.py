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


WORKING_DIR1  = "C:/Users/ASUS/Documents/GitHub/R5D5-Project/model/DataPreprocess/Datasets/2K20_ratings.csv"


# In[3]:


df1 = pd.read_csv(WORKING_DIR1)


# In[4]:


df1.head()


# In[5]:


df1.info()


# In[6]:


# Drop the "Player" column
df1.drop("Player", axis=1, inplace=True)


# In[7]:


# Remove the rows that contain "#N/A" in the "salaries" column
df1.dropna(subset=["salaries"], inplace=True)


# In[8]:


df1 = df1.rename(columns={'salaries':'salary'})


# In[9]:


# Initialize the Scaler
scaler = MinMaxScaler()

# Fit and transform the scaler on the salary column
df1['salary'] = scaler.fit_transform(df1[['salary']])


# In[10]:


df1.head()


# In[11]:


df1.info()


# In[ ]:


#graph view


# In[12]:


df1.hist(bins=30,figsize=(20,15))
plt.show()


# In[ ]:


# linnear relationshp between each variable


# In[13]:


df1.corr()


# In[ ]:


# show what variable impacts salary the most


# In[15]:


# Finding the useful features to predict the salary
corre = df1.corr()
corre['salary'].sort_values(ascending=False)


# In[ ]:


# devide dataset into train and test


# In[17]:


X = df1.drop('salary', axis=1)
y = df1['salary']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)


# In[18]:


#exporting to csv file optional
df1.to_csv("ML_Model_Dataset_01/complete_data_model_2k_ratings.csv", index=False)
X_train.to_csv("ML_Model_Dataset_01/X_train02.csv", index=False)
X_test.to_csv("ML_Model_Dataset_01/X_test02.csv", index=False)
y_train.to_csv("ML_Model_Dataset_01/y_train02.csv", index=False)
y_test.to_csv("ML_Model_Dataset_01/y_test02.csv", index=False)


# In[ ]:




