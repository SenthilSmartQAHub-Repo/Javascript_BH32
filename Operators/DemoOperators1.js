function handleUnknown(input) {
    if (typeof input === "string") {
        console.log("UNKNOWN Input:", input.toUpperCase()); // ✅ Type checked before usage
    }
    else {
        console.log("UNKNOWN Input is not a string.");
    }
}
// Using `unknown`
var unknownValue = "world";
handleUnknown(unknownValue); // Output: UNKNOWN Input: WORLD
unknownValue = 42;
handleUnknown(unknownValue); // Output: UNKNOWN Input is not a string.
