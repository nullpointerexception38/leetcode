function displayTable(orders) {
  const res = orders.reduce((data, order) => {
    const { tableMap, foodSet } = data
    const [customer, tableNumber, food] = order
    foodSet.add(food)
    const tableFoodCountMap = tableMap.get(tableNumber)
    if (tableFoodCountMap) {
      const foodCount = tableFoodCountMap.get(food) ?? 0
      tableFoodCountMap.set(food, foodCount + 1)
    }
    else {
      tableMap.set(tableNumber, new Map([[food, 1]]))
    }
    return data
  }, { tableMap: new Map(), foodSet: new Set() })
  const foods = Array.from(res.foodSet).sort()
  const tableItems = Array.from(res.tableMap).sort(([tableNumber1], [tableNumber2]) => tableNumber1 - tableNumber2)
  const tableRows = tableItems.map(([tableNumber, tableFoodCountMap]) => {
    return [tableNumber, ...foods.map(food => String(tableFoodCountMap.get(food) ?? 0))]
  })
  return [['Table', ...foods], ...tableRows]
}

console.log(displayTable([
  ["David","3","Ceviche"],
  ["Corina","10","Beef Burrito"],
  ["David","3","Fried Chicken"],
  ["Carla","5","Water"],
  ["Carla","5","Ceviche"],
  ["Rous","3","Ceviche"]
]))
