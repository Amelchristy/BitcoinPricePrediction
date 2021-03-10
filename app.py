from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo
from bson.json_util import dumps


app = Flask(__name__)
connect = PyMongo(app, uri = "mongodb://localhost:27017/indego_db")

@app.route("/")
def home():
    indego = connect.db.summary.find()
    data = []

    for doc in list(indego):
        row = {}
        row['labels'] = doc['labels']
        row['Q219'] = doc['Q219']
        row['Q220'] = doc['Q220']
        row['Q320'] = doc['Q320']
        row['Q319'] = doc['Q319']
        data.append(row)
    # return dumps(list(indego))
    #return jsonify(data)
    #print(data)
    return render_template("index.html", data = data) 





if __name__ == "__main__":
    app.run(debug=True)