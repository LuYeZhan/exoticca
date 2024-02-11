export const transformServiceText = (text: string): string => {
  const lowerCaseText = text.toLowerCase();
  const capitalizedFirstLetterText = lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1);
  const transformedText = capitalizedFirstLetterText.replace(/_/g, ' ');
  return transformedText;
};