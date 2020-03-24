function DynamicSort(property) {
    var sortOrder = 1;
    return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
}

export default DynamicSort;