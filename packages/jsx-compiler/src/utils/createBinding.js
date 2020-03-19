module.exports = function createBinding(key, platForm) {
  key = String(key).trim();
  if (key[0] === '{' && key[key.length - 1] === '}') {
    if(platForm === 'quickapp') {
      key = ' ' + key + ' ';  // Add first and last char. QuickApp use { { a: 1 } } to represent an bindging object.
    } else {
      key = key.slice(1, -1); // Remove first and last char. MiniApp use {{ a: 1 }} to represent an bindging object.
    }
    
  }

  return '{{' + key + '}}';
};
