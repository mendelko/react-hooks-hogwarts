import React, {useState} from "react";


function Tiles({ hogs }){

    const [isShowing, setIsShowing] = useState(true);
    

    function handleClick() {
        setIsShowing((isShowing) => !isShowing);
      }
    
        
    



    // const mappedHogs = hogs.map((hog, index) => {
    //     return  <div key={index} >
    //               <h1>{hog.name} </h1>
    //               <img  src={hog.image} alt="Hog"/>
    //             </div>
               
              
    // })

    const updateTile = hogs.map((hog, index) => {
        if (!isShowing){
            return <div key={index}>
                <h1>
                    {hog.name}
                </h1>
                <img src={hog.image} alt="Hog"/>
                <p>Specialty: {hog.specialty}</p>
                <p>Weight: {hog.weight}</p>
                <p>{hog.greased}</p>
            </div>
        } else {
            return  <div key={index} >
                  <h1>{hog.name} </h1>
                  <img  src={hog.image} alt="Hog"/>
                </div>
        }
    })


    return (
        <div className="ui grid container" onClick={handleClick}>
        {/* {!isShowing ? hogs.map((hog, index) => <div key={index}><h1>{hog.name}</h1><img src={hog.image} alt="Hog"/><p>Specialty: {hog.specialty}</p> <p>Weight: {hog.weight}</p> <p>{hog.greased}</p></div>) : mappedHogs} */}
        {updateTile}
        </div>
    )
}



export default Tiles;