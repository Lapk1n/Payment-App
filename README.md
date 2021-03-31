This is a test app which may provide someone to accomplish payment operation. Powered by React, bootstrap. App has its own realtime database. Hosting: https://payment-app-v3.web.app/

Refactoring task.

1. Previous function:

function func(s, a, b) {
  if (s.match(/^$/)) {
    return -1
  }
  var i = s.length - 1
  var aIndex = -1
  var bIndex = -1
  while (aIndex == -1 && bIndex == -1 && i > 0) {
    if (s.substring(i, i + 1) == a) {
      aIndex = i
    }
    if (s.substring(i, i + 1) == b) {
      bIndex = i
    }
    i = i - 1
  }
  if (aIndex != -1) {
    if (bIndex == -1) {
      return aIndex
    } else {
      return Math.max(aIndex, bIndex)
    }
  }
  if (bIndex != -1) {
    return bIndex
  } else {
    return -1
  }
}

2. Refactored function:
  
  function myFunc(s, a, b) {
  if (typeof s !== 'string' || s.length == 0) return -1

  let index = -1

  for (let i = 0; i < s.length; i++) {
    if (s[i] == a || s[i] == b) {
      index = i
    }
  }
  return index
}
