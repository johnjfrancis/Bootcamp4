import React from 'react'

class RemoveBuilding extends React.Component{
    render(){
        return(
            <form>
                <input type = "button" value = "Remove" onClick = {() =>{
                    this.props.RemoveBuilding()
                }} />
            </form>

        )
    }
    
}

export default RemoveBuilding