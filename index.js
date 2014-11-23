var AB = require('abatar')

module.exports = AB.create(
  [
    AB.Experiment.create(
      'avatar',
      function isMozilla(email) {
        return /@mozilla\.(?:com|org)$/.test(email)
      }
    ),
    AB.Experiment.create(
      'foo',
      function (roll) {
        return this.bernoulliTrial(0.25, roll)
      }
    ),
    AB.Experiment.create(
      'avatarText',
      function linkText(userId) {
        return this.uniformChoice(
          ['Change account picture','Change avatar'],
          userId
        )
      }
    ),
    AB.Experiment.create(
      'exp3',
      function (userId) {
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
    )
  ]
)
