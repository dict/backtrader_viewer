from flask import Flask, Response, send_from_directory
import os

app = Flask(__name__, static_url_path='/static', static_folder='./build/static')


def root_dir():  # pragma: no cover
    return os.path.abspath(os.path.dirname(__file__))


def get_file(filename):  # pragma: no cover
    try:
        src = os.path.join(root_dir(), filename)
        # Figure out how flask returns static files
        # Tried:
        # - render_template
        # - send_file
        # This should not be so non-obvious
        return open(src).read()
    except IOError as exc:
        return str(exc)

@app.route('/')
def read_txt():
    content = get_file('build/index.html')
    return Response(content, mimetype="text/html")

@app.route('/backtesting/<path:filename>')
def get_backtesting_files(filename):
    return send_from_directory("./build/backtesting", filename)

if __name__ == '__main__':
  app.run(debug=True, threaded=True)
