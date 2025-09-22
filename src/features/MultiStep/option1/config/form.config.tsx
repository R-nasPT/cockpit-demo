import AccountStep from "../components/AccountStep";
import AddressStep from "../components/AddressStep";
import PersonalStep from "../components/PersonalStep";
import {
  accountSchema,
  addressSchema,
  personalSchema,
} from "../schemas/form.schema";

export const steps = [
  {
    id: "personal",
    label: "ข้อมูลส่วนตัว",
    component: <PersonalStep />,
    schema: personalSchema,
  },
  {
    id: "address",
    label: "ที่อยู่",
    component: <AddressStep />,
    schema: addressSchema,
  },
  {
    id: "account",
    label: "บัญชี",
    component: <AccountStep />,
    schema: accountSchema,
  },
] as const;
