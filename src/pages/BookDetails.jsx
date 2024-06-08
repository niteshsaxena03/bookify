import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useEffect } from "react";

function BookDetails() {
    const params=useParams();
    const firebase=useFirebase();

    useEffect(()=>{
        firebase.getBookByID(params.bookId).then((value)=>console.log(value.data()));
    },[])
  return (
    <div>
      <h1>details of book</h1>
    </div>
  );
}

export default BookDetails;
