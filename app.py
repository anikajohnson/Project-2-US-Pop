# flask dependencies
from flask import Flask
from flask import render_template 
from flask import jsonify

# sql alchemy dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func


# Define the database connection parameters
    #### see config.py
    #  username = 'postgres'  # Ideally this would come from config.py (or similar)
    # password = 'postgresadmin'  # Ideally this would come from config.py (or similar)

### define database variable    
database_name = 'DatabaseName' # Created in Week 9, Night 1, Exercise 08-Stu_CRUD 
connection_string = f'postgresql://{username}:{password}@localhost:5432/{database_name}'


# Connect to the database
engine = create_engine(connection_string)

# reflect an existing database into a new model
base = automap_base()

# reflect the tables
base.prepare(engine, reflect=True)

# Save reference to the table
table = base.classes.tablename

# Flask Setup
# Instantiate the Flask application
app = Flask(__name__)

# disable page caching
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# flask app routes
# index.html route
@app.route("/")
def IndexRoute():
    ''' This function runs when the browser loads the index route. 
        Note that the html file must be located in a folder called templates. '''

    webpage = render_template("index.html")
    return webpage

