function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Check if the sentence ends with a period
    if (sentence.charAt(sentence.length - 1) !== '.') {
        throw new Error("The sentence must end with a period.");
    }

    // Process the sentence character by character
    let insideWord = false;
    for (let i = 0; i < sentence.length - 1; i++) {  // Exclude the final period
        let char = sentence.charAt(i);
        length++;

        if ('aeiouAEIOU'.includes(char)) {
            vowelCount++;
        }

        if (char === ' ') {
            if (insideWord) {
                insideWord = false;
            }
        } else {
            if (!insideWord) {
                wordCount++;
                insideWord = true;
            }
        }
    }

    // Output results
    console.log("Length:", length);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
}

// Example usage
let sentence = "Hello world.";
analyzeSentence(sentence);
