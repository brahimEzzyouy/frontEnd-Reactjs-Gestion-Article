import React from "react";
//import ReactPaginate from 'react-paginate';
//const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Articles = () => {
  return (
    <div style={{padding:'20px'}}>
      
      <div className="container mt-3">
        <div className="card" style={{width:'400px'}}>
          <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0287/6738/7780/products/PORTRAITOLLOWORANGE6.png?v=1597638270" alt="Card image" style={{width:'100%'}}/>
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text.
             John Doe is an architect and engineer...</p>
            <a href="#" className="btn btn-primary">See More</a>
          </div>
        </div>
        <br/>
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Articles;
