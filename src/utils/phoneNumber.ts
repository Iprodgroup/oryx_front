const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  if (cleaned.length === 11 && cleaned[0] === '7') {
    return cleaned.replace(
      /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
      '+$1 ($2) $3-$4-$5'
    );
  } else {
    return phoneNumber;
  }
};

const unformatPhoneNumber = (formattedPhoneNumber: string) => {
  return formattedPhoneNumber.replace(/\D/g, '');
};

export { formatPhoneNumber, unformatPhoneNumber };
