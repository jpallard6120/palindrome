function reverse(string) {
    return Array.from(string).reverse().join("");
}

function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return string.toLowerCase();
    }

    this.processedContent = function processedContent() {
        return this.processor(this.content);
    };

    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
    };
};

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Override the processedContent method from the Phrase object
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();

function emailParts(email) {
    username = email.split("@")[0]
    remaining = email.split("@")[1]
    domain = remaining.split(".")[0]
    tld = remaining.split(".")[1]
    return email_array = [username, domain, tld]
}

// Monkey Patching the native String object
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return string.toLowerCase();
    }

    this.processedContent = function processedContent() {
        return this.processor(this.content);
    };

    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    };
};