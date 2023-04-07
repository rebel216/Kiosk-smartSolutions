import React from "react";




const ComponentToPrint = () => {
    var user = JSON.parse(sessionStorage.user);
    return (
        <div className="main-cointainer">
            <h2>Compnent2</h2>

<p>{user.fname} </p>

        </div>
    )
}

export default ComponentToPrint;
