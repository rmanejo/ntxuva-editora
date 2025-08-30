from flask import Flask, render_template
import os
from waitress import serve


# Inicializa o aplicativo Flask
app = Flask(__name__)

# Rota para servir a página inicial
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/livros')
def livros():
    return render_template('livros.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"🚀 Servidor ntxuva a correr em: http://127.0.0.1:{port}")
    serve(app, host='0.0.0.0', port=port, threads=4)