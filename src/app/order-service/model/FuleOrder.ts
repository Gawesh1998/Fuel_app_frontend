
const FuelOrder = new mysql.Schema(
    {
      invoiceNumber: {
        type: String,
        required: true,
      },
      fuelType: {
        type: String,
        required: true,
      },
      fuelQuantity: {
        type: Number,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
      gasStationName: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
  
  export default mysql.model("FuelOrder", FuelOrder);