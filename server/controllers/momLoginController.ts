import { Request, Response } from 'express';
import MomForm from '../models/momModels';

const submitForm = async (req: Request, res: Response) => {
  try {
    const momData = req.body;
    const newMom = new MomForm(momData);
    await newMom.save();
       res.json(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Form submission failed' });
  }
};

export default {
  submitForm,
};
