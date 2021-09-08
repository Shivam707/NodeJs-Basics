tasks.push(utils.filterDriversWithFleets.bind(null, handlerInfo, filteredDrivers, latitude, longitude, paramsWrapper, operatorId, cityId));


var operatorId = sessionData.operator_id;
var cityId = sessionData.city_id;
var latitude = sessionData.request_latitude;
var longitude = sessionData.request_longitude;

asyncTasks.push(utils.filterDriversWithFleets.bind(null, handlerInfo, filteredDrivers, latitude, longitude, parametersWrapper, operatorId, cityId));
exports.filterDriversWithFleets         = filterDriversWithFleets;

function filterDriversWithFleets(handlerInfo, filteredDrivers, latitude, longitude, paramsWrapper, operatorId, cityId, callback){
    if(!paramsWrapper.filter_drivers_with_fleets_enabled || !filteredDrivers.requestEligibleDrivers){
        return callback(null);
    }
    var stmt = `SELECT id, name, city_id FROM tb_fleet WHERE operator_id = ? AND city_id = ? AND is_active = 1 AND ST_CONTAINS(polygon_coordinates,POINT(?,?))`;
    var values = [operatorId, cityId, latitude, longitude];

    var query = dbHandler.getInstance().executeQuery(stmt, values, function (err, result) {
    loggingImp.logDatabaseQuery(handlerInfo, 'Filter drivers with fleets', err, result, query.sql);
        if (!result.length || err) {
        return callback(null);
        }
        var filteredDriversFleetIds = [];
        var fleetIds = [];
        var fleetDrivers = []
        var commonFleets = {};

        for(var index = 0; index < filteredDrivers.requestEligibleDrivers.length; index++){
            filteredDriversFleetIds.push(filteredDrivers.requestEligibleDrivers[index].fleet_id);
        }

        for(var index = 0; index < result; index++){
            fleetIds.push(result[index].id);
        }

        for (var id of filteredDriversFleetIds){
            commonFleets[id] = 0;
        }

        for (var id of FleetIds){
            if(commonFleets.hasOwnProperty(id)){
                commonFleets[id] = 1;
            }
            
        }

        for(var driver of filteredDrivers){
            if(commonFleets.hasOwnProperty(driver.fleet_id) && commonFleets[driver.fleet_id] === 1){
                fleetDrivers.push(driver);
            }
        }


        filteredDrivers.requestEligibleDrivers = fleetDrivers;
        return callback(null);
    });
    
    
}
