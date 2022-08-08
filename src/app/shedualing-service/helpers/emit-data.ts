import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({
    clientId: "schedule-topic-producer",
    brokers: ["localhost:9092"],
  });
  
  const producer = kafka.producer({
    createPartitioner: Partitioners.DefaultPartitioner,
  });
  
  export const emitDataToScheduleTopic = async (data: any, uuid: String) => {
    await producer.connect().catch((err) => console.error(err));
  
    const newData = { ...data, invoiceNumber: uuid };
  
    await producer
      .send({
        topic: "schedule-topic",
        messages: [{ key: JSON.stringify(uuid), value: JSON.stringify(newData) }],
      })
      .catch((err) => console.error(err));
  
    await producer.disconnect();
  };