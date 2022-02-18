let assert = require("assert");
let Phrase = require("../index.js")

describe("Phrase", function() {
    describe("#palindrome", function() {

        it("should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("apple");
            assert(!nonPalindrome.palindrome());
        });

        it("should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("should return true for a mixed-case palindrome", function() {
            let mixedPalindrome = new Phrase("RacEcAr");
            assert(mixedPalindrome.palindrome());
        });
        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome());
        });
    });
    describe("#letters", function() {
        it("should return only letters", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
        })
        it("should not return null", function() {
            let someString = new Phrase("");
            let someOtherString = new Phrase("FooBarBaz!,;  123")
            assert(someString.letters() != null)
            assert(someOtherString.letters() != null)
        })
    })
});