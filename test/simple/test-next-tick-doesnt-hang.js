// Copyright & License details are available under JXCORE_LICENSE file



/*
 * This test verifies that having a single nextTick statement and nothing else
 * does not hang the event loop. If this test times out it has failed.
 */

process.nextTick(function() {
  // Nothing
});