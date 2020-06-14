from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('./index.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('./index.html')

if __name__ == "__main__":
	app.run('0.0.0.0', '80', debug=False, 
		threaded=True, use_reloader=False)