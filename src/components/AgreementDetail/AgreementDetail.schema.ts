import { z } from "zod";

export const AgreementDetailSchema = z.object({
  agreementNumber: z.string(),
  agreementDate: z.string(),
  dealer: z.string(),
  invoiceNumber: z.string(),
  invoiceDate: z.string(),
  invoiceAmount: z.string(),
  deposit: z.string(),
  terms: z.string(),
  firstDate: z.string(),
  finalDate: z.string(),
  mupPercent: z.string(),
  payable: z.string(),
  mup: z.string(),
  installment: z.string(),
  payDealer: z.string(),
  paidDealer: z.boolean(),
  paidDate: z.string(),
  referenceNumber: z.string(),
  loyaltyBonus: z.string(),
  earlyPaymentBonus: z.string(),
  totalBonusAmount: z.string(),
  method: z.string(),
  paid: z.string(),
  paidDate2: z.string(), // ?
  referenceNumber2: z.string(), // ?
});
