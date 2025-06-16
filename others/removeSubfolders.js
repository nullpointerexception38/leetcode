function removeSubfolders(folders) {
  const folderMap = folders.reduce((obj, folder) => Object.assign(obj, { [folder]: true }), {})
  for (const folder of folders) {
    const folderNames = folder.slice(1).split('/')
    if (folderNames.length <= 1) {
      continue
    }
    let path = ''
    for (let i = 0; i < folderNames.length - 1; i++) {
      const folderName = folderNames[i]
      path += '/' + folderName
      if (folderMap[path]) {
        delete folderMap[folder]
      }
    }
  }
  return Object.keys(folderMap)
}

console.log(removeSubfolders(
  ["/a/b/c","/a/b/ca","/a/b/d"]
))
