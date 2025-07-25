class UndergroundSystem {
  constructor() {
    this.checkInMap = new Map()
    this.timeMap = new Map()
  }

  checkIn(id, stationName, t) {
    const { checkInMap } = this
    if (checkInMap.has(id)) {
      return
    }
    checkInMap.set(id, { stationName, t })
  }

  getTimeMapKey(startStation, endStation) {
    return `${startStation}-${endStation}`
  }

  checkOut(id, stationName, t) {
    const { checkInMap, timeMap } = this
    const row = checkInMap.get(id)
    if (!row) {
      return
    }
    checkInMap.delete(id)
    const key = this.getTimeMapKey(row.stationName, stationName)
    const timeRow = timeMap.get(key) ?? { count: 0, total: 0 }
    timeRow.count++
    timeRow.total += t - row.t
    timeMap.set(key, timeRow)
  }

  getAverageTime(startStation, endStation) {
    const key = this.getTimeMapKey(startStation, endStation)
    const row = this.timeMap.get(key)
    if (row) {
      return row.total / row.count
    }
    return 0
  }
}

const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10

console.log(undergroundSystem.getAverageTime('Leyton', 'Waterloo'))

undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12

