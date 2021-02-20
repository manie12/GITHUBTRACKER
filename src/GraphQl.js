
import axios from 'axios';


const token = "800fb18f07e03424060368c196836c0c861acd8b"



const baseUrl = "https://api.github.com/graphql "

export const FetchQuery = async () => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

        Authorization: "    Bearer" + token
    }

    const data = {
        "query": `
        query{
            user(login:"manie12" client_id="b0aff946b4719ff8e96f" client_secret="" ){
                repositories(first:10){
                  edges{
                    node{
                      name
                    issues(first:10 ){
                      edges{
                        node{
                          title
                          createdAt
                          
                        }
                      }
                    }
                      
                    }
                  }
                }
              }
        
          
              



        } 
            
        `
    }
    try {
        const resp = await axios.post(baseUrl, { query: data }, { headers: headers })
        console.log(resp)
    } catch (error) {
        console.log(error)
    }


}

