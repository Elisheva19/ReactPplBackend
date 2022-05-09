import  React from 'react';
import axios from 'axios';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';


class PeopleBackend extends React.Component{

state ={
people: [],
person:{
    firstName: '',
    lastName: '',
    age: ''
},
edit:false,

checkedPeople: []
}

componentDidMount(){
    axios.get('/api/people/getppl').then(ppl =>{
        this.setState({people: ppl.data});
    })
}

onAddClick=()=>{
axios.post('/api/people/addperson', this.state.person).then(()=>{
        axios.get('/api/people/getppl').then(ppl=>{
            this.setState({people: ppl.data,
                person:{
                    firstName: '',
                    lastName: '',
                    age: ''
                }
            });
        });
    });
}
onUpdateClick=()=>{
    axios.post('/api/people/update', this.state.person).then(()=>{
        axios.get('/api/people/getppl').then(ppl=>{
            this.setState({people: ppl.data,
                person:{
                    firstName: '',
                    lastName: '',
                    age: ''
                },
                edit:false
            });
        });
    });
}


onTextChange = e => {
    const copy={...this.state.person};
    copy[e.target.name]= e.target.value;
    this.setState({person:copy});
}

onEditClick = p =>{
    
    this.setState({person:p, edit:true});
}
onCancelClick= () =>{
    this.setState({edit:false});
    this.setState({person:{
        
            firstName: '',
            lastName: '',
            age: ''
        }
    })

}
onDeleteClick =({id})=>{
    axios.post('/api/people/delete', {id}).then(()=>{
        axios.get('/api/people/getppl').then(ppl=>{
            this.setState({people: ppl.data });
        });
    });
}


onCheckAll=()=>{
    this.setState({checkedPeople:this.state.people})
}
onUncheckAll=()=>{
    this.setState({checkedPeople: []})
}

onCheckChange=(p)=>{
    const{checkedPeople}=this.state;
    if(checkedPeople.includes(p)){
        this.setState({checkedPeople: checkedPeople.filter(cp=>cp.id !== p.id)});
    }else{
        this.setState({checkedPeople: [...checkedPeople, p]});
    }
}
onDeleteAll=()=>{

    console.log(this.state.checkedPeople.length)
 this.state.checkedPeople.forEach(p => {
     this.onDeleteClick(p);
 });
 
    this.setState({checkedPeople: []})
   
}

render() {
   

    return (

        <div className='container mt-5'>

        <PersonForm
        onTextChange={this.onTextChange}
        firstName={this.state.person.firstName}
        lastName={this.state.person.lastName}
        age={this.state.person.age}
        onAddClick={this.onAddClick}
        edit={this.state.edit}
        onCancel={this.onCancelClick}
        onUpdateClick={this.onUpdateClick}

        />
 <table className='table table-mt-4 table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th >
                                
                                <button className='btn btn-danger' onClick={this.onDeleteAll}>Delete all:</button>
                                
                               
                                <button className='btn btn-info' onClick={this.onCheckAll}>Check all:</button>
                                
                                <button className='btn btn-info' onClick={this.onUncheckAll}>Uncheck all:</button>
                               
                             
                                
                              
                             
                            </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Edit/delete:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map((p, i) =>{

                               return  <PersonRow person={p} key={i}
                                       onEditClick={()=>this.onEditClick(p)}
                                   onAddClick={this.onAddClick}
                                   onDeleteClick={() => this.onDeleteClick(p)}
                                   checkAll={this.state.checkAll}
                                   onCheckChange={()=>this.onCheckChange(p)}
                                   checked={this.state.checkedPeople.includes(p)}

                                    

                                 />})}
                             

                        </tbody>
                  
                    </table>


        </div>

    )
    
   }
}

export default PeopleBackend;



























