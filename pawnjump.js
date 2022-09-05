function getNumRequiredMoves(jumps) {
  // Remember the positions that have been visited
  let isVisited = Array(jumps.length).fill(false);
  // Position of the pawn
  let position = 0;
  // Final result
  let numMoves = 0;

  while (position >= 0 && position < jumps.length) {
    if (isVisited[position]) {
      // This position has been visited before
      return -1;
    }
    // Mark this position as visited
    isVisited[position] = true;
    // Jump
    position += jumps[position];
    // Increment the jump counter
    ++numMoves;
  }

  return numMoves;
}
