var AB = require('abatar')

module.exports = AB.create(
  {
    enableAvatarLinkForMozillaEmails: {
      subjectInputs: ['email'],
      independentOutputs: ['avatarLinkVisible'],
      groupingFunction: function (subject) {
        return /@mozilla\.(?:com|org)$/.test(subject.email)
      }
    }
  }
)
