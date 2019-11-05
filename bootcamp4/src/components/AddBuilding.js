import React from 'react'

class AddBuilding extends React.Component{

    
    



    render()
    {return(


        <form >
            <label>
                Name:
                <input type = "text" ref = "Name" >

                </input>
                Code:
                <input type = "text" ref = "Code" >

                </input>
                Address:
                <input type = "text" ref = "Address" >

                </input>
                Latitude:
                <input type = "text" ref = "Latitude" >

                </input>
                Longitude
                <input type = "text" ref = "Longitude" >

                </input>
            </label>
            <input type = "button" value = "Submit" onClick = {() =>{this.props.UpdateBuildingData(
            this.refs.Name.value,
            this.refs.Code.value,
            this.refs.Address.value,
            this.refs.Latitude.value,
            this.refs.Longitude.value
        )}} />
        </form>
    )}
}

export default AddBuilding