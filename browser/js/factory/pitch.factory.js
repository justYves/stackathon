// // Factory that will analyse the pitch from the microphone
// app.factory('pitch',function(note){
//   var NotesArray=note["440"];
//   console.log("pitch factory:", NotesArray);

//   var findClosestNote = function (freq) {
//     // Use binary search to find the closest note
//     var low = -1;
//     var high = NotesArray.length;
//     while (high - low > 1) {
//       var pivot = Math.round((low + high) / 2);
//       if (NotesArray[pivot].frequency <= freq) {
//         low = pivot;
//       } else {
//         high = pivot;
//       }
//     }

//     if (Math.abs(NotesArray[high].frequency - freq) <= Math.abs(NotesArray[low].frequency - freq)) {
//       // notes[high] is closer to the frequency we found
//       return NotesArray[high];
//     }

//     return NotesArray[low];
//   };

//   var findFundamentalFreq = function(buffer, sampleRate) {
//   // We use Autocorrelation to find the fundamental frequency.

//   // In order to correlate the signal with itself (hence the name of the algorithm), we will check two points 'k' frames away.
//   // The autocorrelation index will be the average of these products. At the same time, we normalize the values.
//   // Source: http://www.phy.mty.edu/~suits/autocorrelation.html
//   // Assuming the sample rate is 48000Hz, a 'k' equal to 1000 would correspond to a 48Hz signal (48000/1000 = 48),
//   // while a 'k' equal to 8 would correspond to a 6000Hz one, which is enough to cover most (if not all)
//   // the notes we have in the notes.json file.
//   var n = 1024, bestR = 0, bestK = -1;
//   for(var k = 8; k <= 1000; k++){
//     var sum = 0;

//     for(var i = 0; i < n; i++){
//       sum += ((buffer[i] - 128) / 128) * ((buffer[i + k] - 128) / 128);
//     }

//     var r = sum / (n + k);

//     if(r > bestR){
//       bestR = r;
//       bestK = k;
//     }

//     if(r > 0.9) {
//       // Let's assume that this is good enough and stop right here
//       break;
//     }
//   }

//   if(bestR > 0.0025) {
//     // The period (in frames) of the fundamental frequency is 'bestK'. Getting the frequency from there is trivial.
//     var fundamentalFreq = sampleRate / bestK;
//     return fundamentalFreq;
//   }
//   else {
//     // We haven't found a good correlation
//     return -1;
//   }
// };

// return {
//   findFundamentalFreq: findFundamentalFreq,
//   findClosestNote: findClosestNote
// };


// });
