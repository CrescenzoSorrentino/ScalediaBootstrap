(function(global){
  function estimate(text, wordsPerMinute = 200) {
    if (!text) return 0;
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  }
  global.ReadingTime = global.ReadingTime || {};
  global.ReadingTime.estimate = estimate;
})(typeof window !== 'undefined' ? window : this);
