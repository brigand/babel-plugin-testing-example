// import { Visitor } from "babel-traverse";

module.exports = function testPlugin(babel) {
  /**
   * This visitor simply swaps properties key names for values
   * @type Visitor
   */
  const visitor = {
    Property(path){
      path.node.value.value = path.node.key.name;
    }
  };

  return {
    visitor
  };
};
