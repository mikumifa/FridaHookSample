function func() {
  Java.perform(function () {
    var q = Java.use("com.zhuomogroup.ylyk.contract.q");
    q["m"].overload("java.util.Map").implementation = function (map) {
      var result = "";
      var keyset = map.keySet();
      var it = keyset.iterator();
      while (it.hasNext()) {
        var keystr = it.next().toString();
        var valuestr = map.get(keystr).toString();
        console.log(keystr, valuestr);
        result += valuestr;
      }
      var result = this["m"](map);
      console.log("出参--", result);
      return result;
    };
  });
}
setTimeout(func, 10000);
