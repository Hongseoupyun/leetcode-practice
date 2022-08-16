Array.prototype.duplicate = function() {
  
  var len = this.length;
  
  for (var i = 0; i < len; i++) {
    this[len + i] = this[i];
  }
  
  return this;
}
  
Array.prototype.duplicate = function () {
    var array = this;
    return array.concat(array);
};
 console.log([1,2,3,4,5].duplicate()); //[1,2,3,4,5,1,2,3,4,5]