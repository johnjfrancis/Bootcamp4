import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      RemovedBuildings: []
    };
    
  }

  RemoveBuilding(){
    this.state.RemovedBuildings.push(this.state.selectedBuilding)
    this.setState({
      selectedBuilding: 0
    })
  }

   UpdateBuildingData(Name,Code,Address,Lat,Long){
    console.log("Attempting to add building")
    var newId = this.props.data[this.props.data.length - 1].id + 1;
    var building = {
      id: newId,
      name: Name,
      code: Code,
      address: Address,
      coordinates:{
        latitude: Lat,
        longitude: Long
      }
    }
    console.log('Building', building)
    this.props.data.push(building);
  }


 

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState(
        {
          filterText: value
        }
    )
//    console.log('App state:', this.state)
  } 

  selectedUpdate(id) {
    console.log('In selected Update')
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState(
        {
          selectedBuilding: id
        }
    )
    console.log('App state:', this.state)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterVal = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    RemovedBuildings = {this.state.RemovedBuildings}
                    data={this.props.data} 
                    selectedUpdate = {this.selectedUpdate.bind(this)} 
                    filterText = {this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              data = {this.props.data}
              selectedBuilding = {this.state.selectedBuilding}
              RemoveBuilding = {this.RemoveBuilding.bind(this)}
              />
            </div>
          </div>
          <AddBuilding UpdateBuildingData = {this.UpdateBuildingData.bind(this)}/> 
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
