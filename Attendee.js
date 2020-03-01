class Attendee {
    /**
     * 
     * @param {string} userID The Discord User's Id
     * @param {string} username The Discord User's username
     * @param {string} mention 
     * @param {number} count 
     */
    constructor(userID, username, mention, count = 1) {
        this.id = userID;
        this.username = username;
        this.mention = mention;
        this.count = count;
        this.here = false;

    }
    toString() {
        return this.mention;
    };
}
module.exports = Attendee;