import React from 'react';

export default function PersonForm({firstName, lastName, age, onTextChange, onAddClick, edit, onCancel, onUpdateClick}){

    return <div className="row col-md-12">
    <div className="col-md-3">
        <input value={firstName} onChange={onTextChange} name='firstName' type="text" className="form-control" placeholder="First Name" />
    </div>
    <div className="col-md-3">
        <input value={lastName} onChange={onTextChange} name='lastName' type="text" className="form-control" placeholder="Last Name" />
    </div>
    <div className="col-md-3">
        <input value={age} onChange={onTextChange} name='age' type="text" className="form-control" placeholder="Age" />
    </div>
    <div className="col-md-3">
        {edit ? <div>
        <button  onClick={onUpdateClick} className='btn btn-primary btn-block'>Update</button>
        <button  onClick={onCancel} className='btn btn-success btn-block'>Cancel:</button> 
        </div>
       : <button  onClick={onAddClick} className='btn btn-primary btn-block'>Add</button>
}

    </div>
</div>
}

