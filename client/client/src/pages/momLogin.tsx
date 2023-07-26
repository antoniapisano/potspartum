import React from 'react';
import FacebookLogin from 'react-facebook-login'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const momLogin: React.FC = () => {
    const history =usehsitory ();

const responseFacebook = (resopnse: any) => {
    const { accessToken } = response;
    axios
      .post('/api/login/facebook', { accessToken, email })
      .then((res) => {
        if (res.data.newUser) {
            history.push('/mom-fomr');
        } else {
           //login page 
        }
})
.catch ((error)) => {
    //error handling
});
};

return (
    <div>
        <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default momLogin;