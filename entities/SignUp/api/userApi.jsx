import axios from 'axios'
import { BASE_URL } from '../../../shared/config/config';
export const signUp = ({formdata}) => {    
    axios.post(`${BASE_URL}/user/register`,
        {
            "name": name, 
            "email" : email,
            "password": password,
            "phone" : phone,
            "nickname" : nickname,
            "gender" : gender,
            "profile_img" : profile_img,
            "country": country,
            "gps_consent": gps_consent,
            "is_public" : is_public
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error('error!', error.response?.data || error.message);
    });
};

export const login = (email,password) => {    
    axios.post(`${BASE_URL}/user/register`,
        {
            "email" : email,
            "password": password,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error('error!', error.response?.data || error.message);
    });
};
