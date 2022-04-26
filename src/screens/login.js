import React from 'react'

const Login=()=> {
  return (
    <div>
        <form action="/action_page.php" class="col-md-4 offset-4 ">
            <div class="mb-3 mt-3 ">
                <label for="email" class="form-label">Login:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
            </div>
            <div class="form-check mb-3">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                </label>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
  )
}

export default Login