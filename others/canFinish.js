class Course {
  constructor(name) {
    this.name = name
    this.from = new Set()
    this.to = new Set()
  }

  get isStartingCourse() {
    return this.from.size === 0
  }
}

function canFinish(numCourses, prerequisites) {
  const courseMap = new Map()
  const findOrCreateCourseObj = course => {
    const existedCourseObj = courseMap.get(course)
    if (existedCourseObj) {
      return existedCourseObj
    }
    const courseObj = new Course(course)
    courseMap.set(course, courseObj)
    return courseObj
  }
  for (const [course, pre] of prerequisites) {
    const courseObj = findOrCreateCourseObj(course)
    const preObj = findOrCreateCourseObj(pre)
    preObj.to.add(courseObj)
    courseObj.from.add(preObj)
  }
  const size = courseMap.size
  const taken = new Set()
  while (true) {
    let hasStartingCourses = false
    for (const [, s] of courseMap) {
      if (!s.isStartingCourse) {
        continue
      }
      hasStartingCourses = true
      taken.add(s.name)
      for (const toCourse of s.to) {
        toCourse.from.delete(s)
      }
      courseMap.delete(s.name)
    }
    if (!hasStartingCourses) {
      break
    }
  }
  return size === taken.size
}
