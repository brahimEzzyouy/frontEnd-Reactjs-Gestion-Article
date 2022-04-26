import React from "react";

const Articles = () => {
  return (
    <div style={{padding:'20px'}}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Created at</th>
            <th scope="col">Updated at</th>
            <th scope="col">Published</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
