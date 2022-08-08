import { v4 as uuid } from "uuid";

export const createInvoiceId = (): String => {
    const id: string = uuid();
    return id;
  };


