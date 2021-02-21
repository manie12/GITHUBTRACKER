import axios from 'axios';


const token = "539260686cfc553ee3366e2cf3214bbcc9f08519 "



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

