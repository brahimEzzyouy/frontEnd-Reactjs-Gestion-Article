import React from 'react'

const Article = () => {

  return (
      
    <div className="card mb-3">
        <div className='col-md-2 offset-4'>
            <img src="https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PORTRAITOLLOWORANGE6.png?v=1597638270" className="card-img-top" alt="..."/>
        </div>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <div className="card card-body mb-3">
            <p className="card-text">
                <button className="btn btn-link" >+ Add Commentaire </button>
            </p>
            <div class="container mt-3" >
                <form action="/action_page.php">
                    <div class="mb-3 mt-3">
                    <label for="comment">Comments:</label>
                    <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Article