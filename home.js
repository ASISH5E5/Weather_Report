import React from 'react';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
     <center>
        <h1>Hello this is home page</h1>
        <h1>__________________</h1>
        <Link to='/signup'>Login/signup</Link>
     </center>
    </div>
  );
}

export default Home;
