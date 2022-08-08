const Allocation = new mysql.Schema(
    {
      invoiceNumber: {
        type: String,
        required: true,
      },
      fuelType: {
        type: Number,
        required: true,
      },
      fuelQuantity: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
        enum: ["pending", "allocated", "cancelled", "completed"],
        default: "pending",
      },
    },
    { timestamps: true }
  );
  
  export default mysql.model("Allocation", Allocation);