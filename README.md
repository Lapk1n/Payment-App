This is a test app which may provide someone to accomplish payment operation. Powered by React, bootstrap. App has its own realtime database. Hosting: https://payment-app-v3.web.app/

Refactoring task.<br>
<br>
1. Previous function:<br>
<br>
function func(s, a, b) {<br>
  if (s.match(/^$/)) {<br>
    return -1<br>
  }<br>
  var i = s.length - 1<br>
  var aIndex = -1<br>
  var bIndex = -1<br>
  while (aIndex == -1 && bIndex == -1 && i > 0) {<br>
    if (s.substring(i, i + 1) == a) {<br>
      aIndex = i<br>
    }<br>
    if (s.substring(i, i + 1) == b) {<br>
      bIndex = i<br>
    }<br>
    i = i - 1<br>
  }<br>
  if (aIndex != -1) {<br><br>
    if (bIndex == -1) {<br><br>
      return aIndex<br><br>
    } else {<br><br>
      return Math.max(aIndex, bIndex)<br><br>
    }<br><br>
  }<br><br>
  if (bIndex != -1) {<br><br>
    return bIndex<br><br>
  } else {<br><br>
    return -1<br><br>
  }<br><br>
}<br><br>
<br>
2. Refactored function:<br>
  <br>
  function myFunc(s, a, b) {<br>
  if (typeof s !== 'string' || s.length == 0) return -1<br>
<br>
  let index = -1<br>
<br>
  for (let i = 0; i < s.length; i++) {<br>
    if (s[i] == a || s[i] == b) {<br>
      index = i<br>
    }<br>
  }<br>
  return index<br>
}<br>
