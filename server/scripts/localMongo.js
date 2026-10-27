const { MongoMemoryServer } = require('mongodb-memory-server');

(async () => {
  try {
    const mongod = await MongoMemoryServer.create({
      instance: { port: 27017, ip: '127.0.0.1', dbName: 'hospital_management' },
    });
    console.log('MONGO_URI=' + mongod.getUri());
    setInterval(() => {}, 1 << 30);
    process.on('SIGINT', async () => { await mongod.stop(); process.exit(0); });
  } catch (err) {
    console.error('MONGO_START_FAILED', err);
    process.exit(1);
  }
})();
