import React from 'react';

export const Blog = () => {
  let axios = require("axios").default;
  let base_url = "https://medium2.p.rapidapi.com";
  let headers = {
      "x-rapidapi-host": "medium2.p.rapidapi.com",
      "x-rapidapi-key": "e1fc5cd986msh20edab4043504e7p10642ajsnd9e5b422e991"
    };
  let username = "nishu-jain";

  function get_resp(endpoint:any) {
    return axios.request({
        method:'GET',
        url:base_url+endpoint,
        headers:headers
      }).then(function (response:any) {
        return response.data;
      })
  }

  get_resp('/user/id_for/'+username).then((data:any) => {
    let user_id = data.id;
    console.log('User ID: ' + user_id);
    get_resp('/user/'+user_id+'/articles').then(async function (data:any) {
        let article_ids = data.associated_articles;
        console.log(article_ids);
        let articles:any = [];
        for (const article_id of article_ids) {
            await get_resp('/article/'+article_id).then((data:any) => {
                console.log('Fetched: ' + data.title);
                articles.push(data);
            });      
        }
        console.log('\nNumber of Articles written: ' + articles.length);
        console.log(JSON.stringify(articles[1], null, 2));
    });
  });
  return (
    <>
    </>
  )
}