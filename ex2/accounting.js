module.exports = class Account {
  constructor(owner) {
      this.owner = owner;
      this.balance = 0;
  }
//credit function
  credit(amount) {
      this.balance += amount;
  }

// describe the account
  describe() {
      return `owner: ${this.owner}, balance: ${this.balance}`
  }
};