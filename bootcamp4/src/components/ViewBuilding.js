import React from 'react';
import RemoveBuilding from './RemoveBuilding'

class ViewBuilding extends React.Component {
	render() {
		var id = this.props.selectedBuilding
		var building = this.props.data.find(function(element){
			return element.id === id
		})
		if(building === undefined){
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}else{
			if(building.coordinates != undefined){
				return (
					<div>
						<ul>
							<li>
								Code: {building.code}
							</li>
							<li>
								Name :{building.name}
							</li>
							<li>
								Address: {building.address}
							</li>
								
								Coordinates
								<ul>
									<li>
										Lat: {building.coordinates.latitude}
									</li>
									<li>
										Long: {building.coordinates.longitude}
									</li>

								</ul>
							
						</ul>
						<RemoveBuilding RemoveBuilding = {this.props.RemoveBuilding} />
						
					</div>
				)

			}else{
				return (
					<div>
						<ul>
							<li>
								Code: {building.code}
							</li>
							<li>
								Name: {building.name}
							</li>
							<li>
								Address: {building.address}
							</li>
							
						</ul>
						<RemoveBuilding RemoveBuilding = {this.props.RemoveBuilding} />
							
					</div>
				)
			}
		}
		
			
		
	}
}
export default ViewBuilding;
