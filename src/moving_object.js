module.exports = MovingObject;

function MovingObject (obj) {
  this.pos = obj["pos"];
  this.vel = obj["vel"];
  this.radius = obj["radius"];
  this.color = obj["color"];
}
