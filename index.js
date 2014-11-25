var AB = require('abatar')

module.exports = AB.create(
  {
    avatar: function (s) {
      return /@mozilla\.(?:com|org)$/.test(s.email)
    },
    avatarText: function (s) {
      return this.uniformChoice(
        ['Change account picture','Change avatar'],
        s.userId
      )
    },
    foo: function (s) {
      return this.bernoulliTrial(0.25, s.roll)
    },
    rando: function (s) {
      var userId = s.userId
      var hasBanner = this.bernoulliTrial(0.97, userId)
      var condProb = hasBanner ? 0.95 : 0.5
      var hasFeedStories = this.bernoulliTrial(condProb, userId)
      var buttonText = this.uniformChoice(
        ["I'm a voter", "I'm voting"],
        userId
      )
      return {
        hasBanner: hasBanner,
        hasFeedStories: hasFeedStories,
        buttonText: buttonText
      }
    }
  }
)
