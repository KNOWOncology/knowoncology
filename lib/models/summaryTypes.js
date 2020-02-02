const WithoutEntry = (tag, tagHeader) => ({
  tag: {
    type: String,
    default: tag,
    required: true
  },
  tagHeader: {
    type: String,
    default: tagHeader,
    required: true
  },
})

const WithEntry = (tag, tagHeader, requiredEntry) => ({
  ...WithoutEntry(tag, tagHeader),
  entry: {
    type: String,
    required: requiredEntry
  }
})

const OptionalEntry = (tag, tagHeader) => WithEntry(tag, tagHeader, false);
const RequiredEntry = (tag, tagHeader) => WithEntry(tag, tagHeader, true);

module.exports = {
  WithoutEntry,
  OptionalEntry,
  RequiredEntry
}
