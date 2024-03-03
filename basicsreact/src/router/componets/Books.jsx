import React from 'react'

const Books = () => {
    const books = [
        {
          id: 1,
          title: 'Book 1',
          pages: [
            { id: 1, content: 'Page 1 Content' },
            { id: 2, content: 'Page 2 Content' }
          ]
        },
        {
          id: 2,
          title: 'Book 2',
          pages: [
            { id: 1, content: 'Page 1 Content' },
            { id: 2, content: 'Page 2 Content' }
          ]
        }
      ];
  return (
 <>
    <div>Books</div>
    <h3>
        Books displaying bellow
    </h3>
    {
        books.map((data,index)=>{
            return <div key={index}>
                   <Link to="/books"><h4>{data.id}</h4></Link>
            </div>
        })
    }
 </>
  )
}

export default Books