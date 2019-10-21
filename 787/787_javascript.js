/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */

var findCheapestPrice = function (n, flights, src, dst, K) {
    //     Populate Graph
    const graph = {}
    for (let i = 0; i < flights.length; i++) {
        const flightInfo = flights[i]
        if (graph[flightInfo[0]] === undefined) graph[flightInfo[0]] = []
        graph[flightInfo[0]].push({ dest: flightInfo[1], price: flightInfo[2] })
    }

    //     Populate Queue
    const queue = []
    if (graph[src] === undefined) return -1
    for (let i = 0; i < graph[src].length; i++) {
        const { dest, price } = graph[src][i]
        queue.push({ dest, totalCost: price, stops: 0 })
    }

    //     Empty Queue
    const tripPrices = Array(n)
    const visted = new Set()
    while (queue.length) {
        const { dest, totalCost, stops } = queue.shift()
        // console.log(dest, dst, tripPrices[dest], totalCost, stops, K)
        if (tripPrices[dest] === undefined || tripPrices[dest] > totalCost) {
            tripPrices[dest] = totalCost
        }
        if (dest === dst) continue
        if (stops === K) continue
        if (tripPrices[dest] < totalCost) continue

        const key = `${totalCost},${dest}`
        if (visted.has(key)) continue

        //         Check each next flight
        if (graph[dest] === undefined) continue
        for (let i = 0; i < graph[dest].length; i++) {
            const { dest: nextDest, price } = graph[dest][i]
            queue.push({ dest: nextDest, totalCost: totalCost + price, stops: stops + 1 })
        }
        visted.add(key)
    }

    return tripPrices[dst] ? tripPrices[dst] : -1
};

// n cities
// m flights
// u city -> v city = w price

// src => dest with low price up to k stops.
// -1 if none