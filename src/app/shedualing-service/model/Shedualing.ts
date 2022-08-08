const Scheduling = new mysql.Schema(
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
        enum: ["pending", "scheduled", "completed"],
        default: "pending",
      },
      shippingDate: {
        type: Date,
      },
    },
    { timestamps: true }
  );
  
  export default mysql.model("Scheduling", Scheduling);