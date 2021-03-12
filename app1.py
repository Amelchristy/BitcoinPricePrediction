from flask import Flask
from flask import render_template # to render the error page
import psycopg2

app = Flask(__name__)
@app.route("/")

t_host = "PostgreSQL database host address" # either "localhost", a domain name, or an IP address.
t_port = "5432" # default postgres port
t_dbname = "BTC"
t_user = "PostgreSQL"
t_pw = "Gwnomer28!"
db_conn = psycopg2.connect(host=t_host, port=t_port, dbname=t_dbname, user=t_user, password=t_pw)
db_cursor = db_conn.cursor()

@app.route("/import")
def csv_import():
    # Trap errors for opening the file
    try:
        t_path_n_file = "C:/Project-3/Resources/BTC-USD.csv"
        f_contents = open(t_path_n_file, 'r')
    except psycopg2.Error as e:
        t_message = "Database error: " + e + "/n open() text file: " + t_path_n_file
        return render_template("error_page.html", t_message = t_message)

    # Trap errors for copying the array to our database
    try:
        db_cursor.copy_from(f_contents, "tbl_users", columns=('t_name_user', 't_email'), sep=",")
    except psycopg2.Error as e:
        t_message = "Database error: " + e + "/n copy_from"
        return render_template("error_page.html", t_message = t_message)

    # It got this far: Success!

    # Clean up by closing the database cursor and connection
    db_cursor.close()
    db_conn.close()

if __name__ == "__main__":
    app.run(debug=True)