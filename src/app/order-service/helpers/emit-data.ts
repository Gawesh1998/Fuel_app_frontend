import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({
    clientId: "order-topic-producer",
    brokers: ["localhost:9092"],
  });
  
  const producer = kafka.producer({
    createPartitioner: Partitioners.DefaultPartitioner,
  });
  
  export const emitDataToOrderTopic = async (data: any, uuid: String) => {
    await producer.connect().catch((err) => console.error(err));
  
    const newData = { ...data, invoiceNumber: uuid };
  
    await producer
      .send({
        topic: "order-topic",
        messages: [{ key: "1", value: JSON.stringify(newData) }],
      })
      .catch((err) => console.error(err));
  
    await producer.disconnect();
  };