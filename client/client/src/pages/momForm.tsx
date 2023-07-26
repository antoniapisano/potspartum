import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MomFrom: React.FC = () => {
    const [from, setForm]= useState({
     community: '',
     momName: '',
     address: '',
     phone: '',
     email: '',
     kids: 0,
     foodPrefeences:[{ preference: '', note: ''}],
     allergies: '',
     preferredDay: '',   
    });

    const history = useHistory();

    const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => {
            const foodPeformence = [...prevForm.foodPreferences];
            foodPreferences[index] = { ...foodPreferences[index], [name]: value};
            return {..prevForm, foodPreferences };
        });
    };

    const handleAddFoodPreference = () => {
        setForm((prevForm) => ({
            ...prevForm,
            foodPreferences: [...prevForm.foodPreferences, {preference: '', note: '' }],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios
          .post('/api/mom', form)
          .then((res) => {
            history.push('/mom-calendar');
          })
          .catch((error) => {
            // Handle the error
          });
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="community">Community</label>
            <input type="text" id="community" name="community" value={form.community} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="momName">Mom's Name</label>
            <input type="text" id="momName" name="momName" value={form.momName} onChange={handleInputChange} />
          </div>
        
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default MomForm;