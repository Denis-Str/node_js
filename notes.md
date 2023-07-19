### выводит текст на страницу -
```res.send('Home');```

### подключает файлы -
```res.sendFile(`${__dirname}/templates/index.html`);```

### подключение файлов с помощью шаблонизатора -
```res.render("index");```

### Подключение к mongoBD
```
const db = require('./config/db');
const { MongoClient, ServerApiVersion} = require("mongodb");
const client = new MongoClient(db.url, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    }
});

async function run() {
  try {
    require('./routes')(app);
    await client.connect();
    const database = await client.db('node-js');
    const usersCollection = database.collection('users');
    console.log('Connect to Db');
  } catch (e) {
    console.log(e);
  }
}

run().catch(console.dir);
```
