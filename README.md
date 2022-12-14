# Overview
```
Simple crud app pulls 3 random recipes from a free meal api on page load.  
The user may save recipes by clicking on the favorite-icon.  
This action sends a recipe object to a Django api, which saves the recipe to a Postgres database.  
Saved recipes are displayed in a Material UI accordion.  
Each recipe can be expanded to view details such as ingredients and directions.  
From the expanded view, a user may also delete or edit the recipe. 
```

# Getting Started

## Run with Docker-Compose
```
Not yet working. See progress on branch "docker-compose"
```

## Run without Docker
```
Requirements:
    - Node v14.18.3
    - Python 3.11.0
    - pip 22.3.1
    - psycopg2
    - PostgreSQL 14.6
    - Django 4.1.3

python3 -m pip install -r requirements.txt
python3 manage.py runserver

cd client
npm i
npm start
```

# Project Development

## PostgreSQL
```
Install python postgres adapter
- pip3 install psycopg2

In settings.py, change DATABASES object

Start/Stop postgres
- brew services start postgresql
- brew services stop postgresql

Use psql (postgres utility) to create the DB
- psql postgres
- \du
- CREATE DATABASE beyondmd;
- GRANT ALL PRIVILEGES ON DATABASE beyondmd TO postgres;
- \list
- \connect beyondmd
- \dt
- \q

- psql -U userName -d databaseName
```

## Backend
```
Install django api framework
- pip3 install djangorestframework

Disable django's default behavior that blocks incoming requests from external domains
- pip3 install django-cors-headers

Create the django project
- django-admin startproject PHBeyondMD

Open the project in VSC
- cd PHBeyondMD
- code .

Add rest framework
- ./PHBeyondMD/settings.py
- INSTALLED APPS = [..., 'rest_framework',]

Open the project in a browser window
- python3 manage.py runserver
- localhost:8000

Create api directory in the root directory
- setup 
-- __init__.py
-- views.py
-- urls.py
- add to INSTALLED APPS in settings.py

Create recipe app
- manage.py startapp recipe 
- setup recipe model

Migrations
- python3 manage.py makemigrations
- python3 manage.py migrate

Add data to DB
- python3 manage.py shell
- from recipe.models import Recipe
- Recipe.objects.create(strMeal="Recipe Name", etc...)
- recipes = Recipe.objects.all()
- print(recipes)
- exit()


Create a new app
- python3 manage.py startapp AppName

Register the app in settings.py
- INSTALLED_APPS = [..., 'rest_framework', 'corsheaders', AppName.apps.AppNameConfig']

Add corsheaders to settings.py middleware
- MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]

After INSTALLED_APPS in settings.py, make the API accessible from all domains for development. Change to whitelisted domains for production.
- CORS_ORIGIN_ALLOW_ALL = True 
```


## Frontend
```
Create the React app in the parent project folder
- npx create-react-app client --template typescript

Open client on port 3000
- cd client
- npm start

If another process is running on port 3000
- lsof -t -i:9292
==> returns a WID #
- kill -9 #
- npm start

Add .pdf type to react-app-env.d.ts
- declare module '*.pdf'

Install MUI
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material 
```