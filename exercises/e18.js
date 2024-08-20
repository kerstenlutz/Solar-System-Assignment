/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;

  if (!asteroids || asteroids.length === 0) {
    return null; 
  }
  
  const yearCounts = asteroids
    .map(asteroid => asteroid.discoveryYear)
    .filter(year => year) 
    .reduce((counts, year) => {
      counts[year] = (counts[year] || 0) + 1;
      return counts;
    }, {});

  const maxYearEntry = Object.entries(yearCounts).reduce((max, entry) => {
    return entry[1] > max[1] ? entry : max;
  }, [null, 0]);

  return Number(maxYearEntry[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
 