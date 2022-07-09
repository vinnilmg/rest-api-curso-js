# Rest-api-curso-js

ESLINT
```
npx eslint --init
```

Configurações VScode:
```
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll": true
},
```

Criar arquivo .env na raiz do projeto no seguinte formato:
```
DATABASE=teste
HOST=teste
PORT=teste
DB_USERNAME=teste
DB_PASSWORD=teste

TOKEN_SECRET=teste
TOKEN_EXPIRATION=teste

APP_URL=http://localhost
APP_PORT=3001
```

Pra rodar local:
```
npm run dev
```
