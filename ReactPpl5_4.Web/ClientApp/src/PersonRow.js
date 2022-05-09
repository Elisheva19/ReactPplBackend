import React  from "react";


export default function PersonRow({person, onEditClick, onDeleteClick, checked, onCheckChange}){
const {firstName, lastName, age}= person;

return(
    <tr>
    <td>
       
    <input checked= {checked} onChange={onCheckChange} type='checkbox' className='form-control' />

    </td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{age}</td>
    <td>
       <div className="row col-md-3">
        <div>
        <button className="=btn btn-block btn-warning" onClick={onEditClick}>Edit:</button>
        </div>
        <div className="">
        <button className="=btn  btn-block btn-danger" onClick={onDeleteClick}>Delete:</button>
        </div>
        </div>
    </td>
    </tr>
)

}