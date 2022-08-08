// import express, {
//     Request,
//     Response,
//     NextFunction,
//     Application,
//     ErrorRequestHandler,
//   } from "express";
  
//   import cors from "cors";
//   import bodyParser from "body-parser";
  
//   import { Server } from "http";
//   import { emitDataToOrderTopic } from "./helpers/emit-data";
  
// //   import FuelOrder from "./models/FuelOrder";
  
//   const app: Application = express();
  
//   app.use(cors());
//   app.use(bodyParser.json());
  
//   //Import database connection
//   import "./helpers/databaseconfig";
//   import processIncomingOrderData from "./helpers/sensifyRequestData";
// import { fuelQuantityList } from "./classes/fuelQuantity";

 
  
//   app.post("/", async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       req.body.fuelQuantity = fuelQuantityList[req.body.fuelQuantity - 1];
//       const fuelOrderData = processIncomingOrderData(req.body);
//       await emitDataToOrderTopic(req.body, fuelOrderData.invoiceNumber);
  
//       if (!fuelOrderData)
//         return res.status(400).json({
//           status: 400,
//           message: "Please provide valid data",
//         });
  
//       const fuelOrder: any = new FuelOrder(fuelOrderData);
  
//       const order = await fuelOrder.save();
//       res.status(200).json(order);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   });
  
//   const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
//     res
//       .status(error.status || 500)
//       .send({ status: error.status || 500, message: error.message });
//   };
  
//   app.use(errorHandler);
  
//   const server: Server = app.listen(8000, () =>
//     console.log("Server running on port 8000")
//   );