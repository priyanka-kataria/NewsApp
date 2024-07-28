import React, { useEffect, useState } from 'react'
import '../App.css'
const CloneTemplate = ( props ) => {

  const fetchUsers = async ( ap ) => {
    let res = await fetch( ap );
    let data = await res.json();
    let data1 = data.articles;
    setUsers( data1 );
    console.log( data1 )

  }
  
  const [ users, setUsers ] = useState( [] )
  const [ page, setPage ] = useState( 1 );
  // const[ cat, setCat]= useState('sports')
  const [ user, setUser ] = useState( `https://newsapi.org/v2/everything?q=${props.cat}&from=2024-07-19&to=2024-07-19&sortBy=popularity&apiKey=1618ea31efb54eb5a5a85126fc1175a9&pageSize=10&page=${ page }` );
  useEffect( () => {
    fetchUsers( user );
  }, [] )
  const PreviousBtn = () => {
    console.log( page )
    setUser( `https://newsapi.org/v2/everything?q=${props.cat}&from=2024-07-19&to=2024-07-19&sortBy=popularity&apiKey=1618ea31efb54eb5a5a85126fc1175a9&pageSize=10&page=${ page -1  }` );

    setPage( page - 1 );
    fetchUsers( user );
  }
  const NextBtn = () => {
    setUser( `https://newsapi.org/v2/everything?q=${props.cat}&from=2024-07-19&to=2024-07-19&sortBy=popularity&apiKey=1618ea31efb54eb5a5a85126fc1175a9&pageSize=10&page=${ page + 1 }` );
    setPage( page + 1 );
    console.log( page )
    fetchUsers( user );
  }
  // style={{'margin-top':'0rem'}}
  return (
    <>
   
     <h2 > News Monkey</h2>
      <div className="sec5">
        {
          users.map( ( curUser ) => {
            return (

              <div class="card" key={ curUser.url }>
                <img class="productImg" src={ !curUser.urlToImage ? 'https://my.alfred.edu/zoom/_images/foster-lake.jpg' : curUser.urlToImage } />
                <h3>{ curUser.title }</h3>
                <p class="description">{ curUser.description.substr(50)}</p>
                <button class="btn"><a href={ `${ curUser.url }` } target='_blank' >Show more</a></button>
              </div>
            )
          } )
        }
      </div>
      <div className='next-pre-btn'>
        <button disabled={ page <= 1 } className="btn1" onClick={ PreviousBtn }> &larr; Previous</button>
        <button className="btn1" onClick={ NextBtn }>Next &rarr;  </button>
      </div>
   
    </>
  )
}
export default CloneTemplate;