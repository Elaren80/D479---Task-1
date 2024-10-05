(function(window, undefined) {
  var dictionary = {
    "s-f8fce167-fe1d-4b85-86dd-35f239ee0189 s-Slice_1": [ ["Slice 1@1x.png", "ea1e42c6-787b-4b82-a714-bbba25f0038c_1517424372.png"] ],
    "s-982697a5-e4ad-4a33-99ec-cce4eadbdadb s-Slice_1": [ ["Slice 1@1x.png", "16adb968-a67d-451b-bf47-6902970ac912_1517424372.png"] ]
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);