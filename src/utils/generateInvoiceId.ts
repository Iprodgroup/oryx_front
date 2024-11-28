const generateInvoiceId = () => {
    const timestamp = Date.now().toString(); // Временная метка
    const uniquePart = Math.floor(100000 + Math.random() * 900000).toString(); // 6-значное случайное число
  
    return timestamp.slice(-4) + uniquePart; // Общая длина будет 10 цифр
  };
  
  export default generateInvoiceId;