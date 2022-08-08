import { Kafka } from "kafkajs";
import processIncomingMesssage from "./helpers/HandleIncomingMessages";

const kafka = new Kafka({
    clientId: "allocation-topic-consumer1",
    brokers: ["localhost:9092"],
  });
  
  const consumer = kafka.consumer({
    groupId: "allocation-topic-consumer-group",
  });
  const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: "allocation-topic", fromBeginning: true });
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        processIncomingMesssage(message);
      },
    });
  };
  run().catch(console.error);