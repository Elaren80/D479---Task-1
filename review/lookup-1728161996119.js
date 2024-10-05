(function(window, undefined) {
  var dictionary = {
    "f8fce167-fe1d-4b85-86dd-35f239ee0189": "Plan your stay",
    "b6c5fad5-cfcb-4e65-bbc2-b8e63e1ce86a": "Menu",
    "994990d5-7839-4c19-b813-597474c2a51f": "FAQs",
    "e9510201-fa5f-4fdd-8450-f2c0f2aa8f13": "Experiences",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Homepage",
    "982697a5-e4ad-4a33-99ec-cce4eadbdadb": "About",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);