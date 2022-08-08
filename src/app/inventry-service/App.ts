import { Kafka } from "kafkajs";
import processIncomingMesssage from "./helpers/handleIncomeMessages";

const kafka = new Kafka({
    clientId: "order-topic-consumer",
    brokers: ["localhost:9092"],
  });
  
  const consumer = kafka.consumer({
    groupId: "order-topic-consumer-group",
  });

  const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: "order-topic", fromBeginning: true });
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // console.log("Received: ", {
        //   partition,
        //   offset: message.offset,
        //   value: message.value!.toString(),
        // });
        processIncomingMesssage(message);
      },
    });
  };
  run().catch(console.error);