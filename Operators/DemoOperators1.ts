

function handleUnknown(input: unknown) {
  if (typeof input === "string") {
      console.log("UNKNOWN Input:", input.toUpperCase()); // ✅ Type checked before usage
  } else {
      console.log("UNKNOWN Input is not a string.", input.toUpperCase());
  }
}


// Using `unknown`
let unknownValue: unknown = "world";
handleUnknown(unknownValue); // Output: UNKNOWN Input: WORLD

unknownValue = 42;
handleUnknown(unknownValue); // Output: UNKNOWN Input is not a string.
