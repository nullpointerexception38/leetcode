function promiseAll(fns) {
  return new Promise((resolveAll, rejectAll) => {
    const res = []
    fns.forEach((fn, index) => {
      fn()
        .then(value => {
          res.push({ index, value })
          if (res.length === fns.length) {
            resolveAll(res.sort((a, b) => a.index - b.index).map(row => row.value))
          }
        })
        .catch(err => {
          rejectAll(err)
        })
    })
  })
}
