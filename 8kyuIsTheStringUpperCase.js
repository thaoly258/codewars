//Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
//
//"c".isUpperCase() == false
//"C".isUpperCase() == true

String.prototype.isUpperCase = function() {
    return (this == this.toUpperCase())
   }