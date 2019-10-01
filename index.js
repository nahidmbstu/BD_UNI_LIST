const ALL = require("./all_data.json");

class BD_UNIS {
  constructor(name) {
    this.name = name;
  }

  getAll() {
    return ALL;
  }

  getNames() {
    return ALL.map(i => i.name);
  }
  getLocation() {
    return ALL.map(i => i.location);
  }

  getBuildYear() {
    return ALL.map(i => i.BuildYear);
  }
  getshortName() {
    return ALL.map(i => i.shortName);
  }

  havePHD() {
    let uni_name = this.name;

    const found = ALL.find(function(element) {
      return element.name === uni_name;
    });
    if (found == undefined) {
      return false;
    } else if (found.PhD === "Yes") {
      return true;
    } else {
      return false;
    }
  }

  findUni() {
    let uni_name = this.name;

    const found = ALL.find(function(element) {
      return element.name === uni_name;
    });
    return found;
  }
}

// Usage:
let user = new BD_UNIS();

console.log(user.getNames());

module.exports = BD_UNIS;
