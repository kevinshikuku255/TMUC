const axios = require('axios');
const cheerio = require ('cheerio');
const cron = require('node-cron');
let url = 'https://tmuc.ac.ke';
const  models = require('../models');
const { News, Details } = models.default

cron.schedule("0 */2 * * *", async function() {
  const res = await  axios(url)

  let { data }  = res
  
  const $ = cheerio.load(data);

  $(".post-block").each( async function(i, post) {
    let image = $(post).find('img').attr('src')
    let link = $(post).find('a').attr('href')
    let headline = $(post).text().trim();

    
    await News.deleteMany({})
    
    await new News({
      headline,
      link: `https://tmuc.ac.ke${link}`,
      image : `https://tmuc.ac.ke${image}`
    }).save(); 

  });
});




// Cron job to fetch links and news details
cron.schedule("*/1 * * * *", async function() {

  const allLinks = await News.find()
  allLinks.map( async ({link, headline, image}) => {

    const res = await  axios(link) 
    let { data }  = res
  
    const $ = cheerio.load(data);
    // time stamp
    let date = $(".post-block").find('.post-created').text().split(' ').slice(0, 3).toString()
    let  newDateString = date.replaceAll("notice", "").replaceAll(',,', ',');
    let  timeStamp = new Date(newDateString).getTime()/1000;

    let message = $(".post-block").find('.node__content').text().trim().trim()

    await Details.deleteMany({})
    
   let tt = await new Details({
      headline,
      message,
      link,
      image,
      timeStamp
    }).save()
    
console.log(tt)
    
  })

})






const Query = {
  /**
   * Gets all posts
   */
  getPosts: async ( _,  __,  { News } ) => {

    const allPosts = await News.find()
      .sort({ id: 'desc' });
    return allPosts ;

  },


    /**
   * Gets all details
   */
     getDetails: async ( _,  __,  { Details } ) => {

      const allPosts = await Details.find()
        .sort({ timeStamp: 'desc' });
      return allPosts ;
  
    },

};

export default { Query};