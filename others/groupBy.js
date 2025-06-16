Array.prototype.groupBy = function(fn) {
  return this.reduce((obj, item) => {
    const key = fn(item)
    const arr = (obj[key] ?? [])
    arr.push(item)
    return Object.assign(obj, { [key]: arr })
  }, {})
};

const res = [[1,2,3],[1,3,5],[1,5,9]].groupBy(list => String(list[0]))
console.log(res)
