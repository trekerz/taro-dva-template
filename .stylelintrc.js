const fabric = require('@umijs/fabric');
const rules = {
    ...fabric.stylelint.rules,
    'selector-type-no-unknown': null
}
module.exports = {
  ...fabric.stylelint,
  rules
};