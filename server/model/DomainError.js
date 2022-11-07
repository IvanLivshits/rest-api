class DomainError extends Error {
    constructor(code) {
        super();
        this.code = code;
    }
}

module.exports = {DomainError};