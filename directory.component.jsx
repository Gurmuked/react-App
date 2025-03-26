import React from 'react';
import '../index.css';
import MenuItem from './menu-item.component';


class Directory extends React.Component{
  constructor(){
    super();
    

    this.state={
      sections: [
        {
           title: 'HATS' ,
           imageUrl:'',
           id:1 
        },
        {
          title: 'JACKETS' ,
          imageUrl:'',
          id:2
       },
        {
          title: 'SNEAKERS' ,
          imageUrl:'',
          id:3
      },
        {
          title: 'WOMENS' ,
          imageUrl:'',
          id:4
      },
        {
          title: 'MENS' ,
          imageUrl:'',
          id:5
      }
    ]
    }
  }

  render(){
    return(
      <div className='directory-menu grid grid-cols-3 gap-4 w-full items-center text-center'>
        {this.state.sections.map(({ title, imageUrl, id }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    )
    
   
  }
}

export default Directory;