const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// now represent this in Graph or HashMap like key as node and their destinations as list of another nodes
const adjacencyList = new Map();

airports.forEach(airport => adjacencyList.set(airport, []));

routes.forEach(([origin, destination]) => {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
})

console.log('Graph',adjacencyList);

console.log('Starting Breath First Search to find route between PHX and BKK');

const findRouteBfs = (airport) => {
    let destinationsVisited = new Set();
    // In this case lets suppose we have Phoenix as starting point
    // Start processing this airport to find if the destination is its direct children
    let queue = [airport];
    while(queue.length > 0){
        let currentAirport = queue.shift();
       let currentAirportDestinations = adjacencyList.get(currentAirport);
        for(let destination of currentAirportDestinations){
           if(destination === 'BKK'){
               console.log('Route from Phoenix to Bangkok found');
           }

           if(!destinationsVisited.has(destination) ){
               destinationsVisited.add(destination);
               queue.push(destination);
               console.log(destination);
           }

        }
    }
}

const findRouteDfs = (airport, visited = new Set())=> {
    console.log(airport);
    visited.add(airport);

    for(let destination of adjacencyList.get(airport)){
        if(destination === 'BKK'){
            console.log('route found');
            return;
        }

        if(!visited.has(destination)){
            findRouteDfs(destination, visited);
        }
    }
}



// findRouteBfs('PHX')

findRouteDfs('PHX');


