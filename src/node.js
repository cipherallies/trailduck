module.exports = class Node {
  constructor({ name, payload }) {
    this.children = {};

    this.parents = {};

    this.unvisitedChildren = {};

    this.cycles = [];

    this.explored = false;

    this.name = null;

    this.payload = {};
    this.name = name;
    this.payload = payload;
  }

  link(tree, graphNode) {
    if (graphNode.children) {
      graphNode.children.forEach(child => {
        this.children[child] = tree[child];
        this.children[child].parents[this.name] = this;
      });
    }
    this.unvisitedChildren = { ...this.children };
  }

  visit(previous) {
    if (previous) {
      delete previous.unvisitedChildren[this.name];
    }
    return this;
  }

  getUnvisitedChild() {
    const { unvisitedChildren } = this;
    const keys = Object.keys(unvisitedChildren);
    if (!keys.length) return null;
    return unvisitedChildren[keys[0]];
  }

  clean() {
    delete this.explored;
    delete this.getUnvisitedChild;
    delete this.link;
    delete this.unvisitedChildren;
    delete this.visit;
    delete this.clean;
  }
}
