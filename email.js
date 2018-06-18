function emailParts(email) {
  content = email.toLowerCase();
  return content.split(/[@.]/).slice(0,2);
}
