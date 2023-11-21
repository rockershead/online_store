const redis = require("redis");

async function redisConnect() {
  client = redis.createClient({
    host: "localhost",
    port: 6379,
  });

  client.on("error", (error) => console.error(`Error : ${error}`));

  await client.connect();
  return client;
}

async function main() {
  const client = await redisConnect();
  await client.set("user", "Jane");
  const res = await client.get("user");
  console.log(`I get ${res}`);
}

main();
