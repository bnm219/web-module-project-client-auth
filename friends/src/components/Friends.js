import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
      };
    getData = () =>{
    const axios = axiosWithAuth();
    axios.get('/api/friends')
      .then(res => {
        console.log('friends: ', res.data.data)
      })
      .catch(err => {
        console.error('unable to get data: ', err)
      });
    }
    postData = () =>{
        const axios = axiosWithAuth();
        axios.put(`/api/friends`)
          .then(res => {
            console.log('friends: ', res.data.data)
          })
          .catch(err => {
            console.error('unable to get data: ', err)
          });
        }
    putData = () =>{
        const axios = axiosWithAuth();
        axios.put(`/api/friends:${id}`)
          .then(res => {
            console.log('friends: ', res.data.data)
          })
          .catch(err => {
            console.error('unable to get data: ', err)
          });
        }
    deleteData = () =>{
        const axios = axiosWithAuth();
        axios.delete(`/api/friends:${id}`)
            .then(res => {
            console.log('friends: ', res.data.data)
            })
            .catch(err => {
            console.error('unable to get data: ', err)
            });
        }

    render(){
    return (
      <h1>{res.data}</h1>
    );
  }
}

export default Friends;
