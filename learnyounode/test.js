var filteredDrivers = [{ fleet_id: 90, tata:'hi'}, { fleet_id: 95,tata:'bye'}, { fleet_id: 89,tata:'hello'}],
 result = [{ id: 89, name : 'rahul' }, { id: 95, name : 'dt' }, {id : 68, name : 'bb'}];


 var filteredDriversFleetIds = [];
 var fleetIds = [];
 var commonFleets = {};

var array = [];

 for(var index = 0; index < filteredDrivers.length; index++){
     filteredDriversFleetIds.push(filteredDrivers[index].fleet_id);
 }

 for(var index = 0; index < result.length; index++){
     fleetIds.push(result[index].id);
 }

 for (var id of filteredDriversFleetIds){
     commonFleets[id] = 0;
 }

 for (var id of fleetIds){
     if(commonFleets.hasOwnProperty(id)){
         commonFleets[id] = 1;
     }
     
 }

//  console.log(commonFleets)

for(var i of filteredDrivers){
    if(commonFleets.hasOwnProperty(i.fleet_id) && commonFleets[i.fleet_id] === 1){
        array.push(i);
    }
}
console.log(array)