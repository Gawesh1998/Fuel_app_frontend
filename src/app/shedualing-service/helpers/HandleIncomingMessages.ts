import { Message } from "kafkajs";
import shedualing from "../model/shedualing";
import { emitDataToScheduleTopic } from "./emit-data";


export default async function processIncomingMesssage(message: Message) {
    const { value } = message;
    const data = JSON.parse(value!.toString());
    const { invoiceNumber, fuelType, fuelQuantity, status } = data._doc;
  
    //pick a random date from within the next week
    const randomDate = new Date(
      new Date().getTime() + Math.random() * (7 * 24 * 60 * 60 * 1000)
    );
  
    try {
      const newScheduling = new shedualing({
        invoiceNumber,
        fuelType,
        fuelQuantity,
        status: "scheduled",
        shippingDate: randomDate,
      });
  
      const savedScheduling = await newScheduling.save();
  
      console.log(`scheduling saved to database`);
  
      //send message to kafka topic
      await emitDataToScheduleTopic(
        savedScheduling,
        savedScheduling.invoiceNumber
      );
    } catch (error) {
      console.log(error);
    }
    return;
  }