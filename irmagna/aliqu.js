// Check if 'init' is true or if '_modified(Forces, i)' is true
if (init || _.modified(Forces, i)) {
  // Assign the result of 'getForce(f[i])' to 'p'
  p = getForce(f[i]);
} else if (pulse && modified(f[i], pulse)) {
  // If above condition is false, check if 'pulse' is true and 'modified(f[i], pulse)' is true
  // If true, assign the result of 'sim.force(name)' to 'p'
  p = sim.force(name);
} else {
  // If none of the above conditions are met, assign 'null' to 'p'
  p = null;
}
