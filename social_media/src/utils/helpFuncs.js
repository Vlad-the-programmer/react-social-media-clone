export function getSlicedText(text, textLength) {
  if (text === undefined) return "";
  if (text.length <= textLength) return text + "...";

  var newText = text.substring(0, text.indexOf(".") + 1);
  return newText.length <= textLength
    ? newText + ".."
    : newText.substring(0, textLength + 1) + "...";
}
