const Trail = require('./trail');
const Explorer = require('./explorer')

module.exports = class TrailDuck {
  constructor(graph) {
    this.trail = new Trail(graph);
    this.explorer = new Explorer({ trail: this.trail });
    this.explorer.explore();
    this.clean();
  }

  clean() {
    this.trail.clean();
    this.trail.ordered.pop();
    this.trail.ordered.forEach(node => node.clean());
    this.cycles = this.trail.cycles;
    this.ordered = this.trail.ordered;
    this.tree = this.trail.tree;
    delete this.clean;
    delete this.explorer;
    delete this.trail;
  }
}
