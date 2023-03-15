// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  if (seconds < 0 || seconds > 359999) return false;

  const hrs = Math.floor(seconds / 60 / 60);
  const min = Math.floor((seconds - hrs * 60 * 60) / 60);
  const sec = seconds - (hrs * 60 * 60 + min * 60);

  return `${hrs < 10 ? '0' + hrs : hrs}:${min < 10 ? '0' + min : min}:${
    sec < 10 ? '0' + sec : sec
  }`;
}

function humanReadable(seconds) {
  const pad = function (x) {
    return x < 10 ? '0' + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ':' +
    pad(parseInt((seconds / 60) % 60)) +
    ':' +
    pad(seconds % 60)
  );
}
