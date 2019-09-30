/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */



//  FIRST TRY
var findOrder = function (numCourses, prerequisites) {
    const courseGraph = {}
    prerequisites.forEach(prereq => {
        if (!courseGraph[prereq[0]]) courseGraph[prereq[0]] = new Set()
        courseGraph[prereq[0]].add(prereq[1])
    })
    const orderedClasses = []
    const visited = {}
    const marked = {}
    let invalid = false

    const addClass = (classNum) => {
        if (visited[classNum]) return
        if (marked[classNum]) {
            invalid = true
            return
        }

        marked[classNum] = true
        if (courseGraph[classNum]) courseGraph[classNum].forEach(preClass => addClass(preClass))
        orderedClasses.push(classNum)
        visited[classNum] = true
    }


    for (let i = 0; i < numCourses; i++) {
        addClass(i)
    }

    return invalid ? [] : orderedClasses
};