import React from 'react';



class BuilingList extends React.Component {

	





	render() {
		console.log('Props: ',this.props)
	//	console.log('This is my directory file', this.props.data);
		const  data  = this.props.data.filter((value) => {
			if(value.name.match(this.props.filterText)){
				var good = true;
				this.props.RemovedBuildings.forEach(element => {
					if(element === value.id){
						good = false
					}
				});
				return good;
			}else{
				return false;
			}
		});
		const buildingList = data.map(directory => {

			return (
				<tr  key={directory.id}>
					<td>{directory.code} </td>
					<td onClick = {() => this.props.selectedUpdate(directory.id)}> {directory.name} </td>
				</tr>
			);
		});
	
		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
