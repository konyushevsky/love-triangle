/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {


  let loveTriangleAmount = 0;
  let preferencesIteration = preferences.length;
  let matchBuffer = 0;
  let lovesHimself = 0;

  if (preferences.length <= 2) {
    return 0;
  }

  for (let i = 0; i < preferencesIteration; i++) {

    if (preferences[preferences[preferences[i] - 1] - 1] == (i + 1)) {
      loveTriangleAmount++;
    }

  }

  for (let i = 0; i < preferencesIteration; ++i) {

    if (preferences[i] == (i + 1)) {
      lovesHimself++;
    }

  }

  if ((loveTriangleAmount - lovesHimself) / 3 < 1) {
    return 0;
  }

  return (loveTriangleAmount - lovesHimself) / 3;

};
