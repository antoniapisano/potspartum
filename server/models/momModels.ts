import { Schema, model, Document } from 'mongoose';

interface IMomForm extends Document {
  community: string;
  image?: string;
  momName: string;
  address: string;
  phone: string;
  email: string;
  kids: number;
  foodPreferences: { preference: string; note: string }[];
  allergies?: string;
  preferredDay?: string;
}

const MomFormSchema = new Schema<IMomForm>(
  {
    community: { type: String, required: true },
    image: { type: String },
    momName: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    kids: { type: Number, required: true },
    foodPreferences: [
      {
        preference: { type: String },
        note: { type: String },
      },
    ],
    allergies: { type: String },
    preferredDay: { type: String },
  },
  { timestamps: true }
);

export default model<IMomForm>('MomForm', MomFormSchema);
