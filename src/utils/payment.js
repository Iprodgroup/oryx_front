import axios from 'axios';

// Функция для генерации уникального invoiceId
const generateInvoiceId = () => {
    const timestamp = Date.now().toString(); // Временная метка
    const uniquePart = Math.floor(100000 + Math.random() * 900000).toString(); // 6-значное случайное число
    return timestamp.slice(-4) + uniquePart; // Общая длина будет 10 цифр
};

const handlePayment = async (amount) => {
    try {
        // Генерация уникального invoiceId
        const invoiceId = generateInvoiceId();

        // Данные для запроса на получение токена
        const data = {
            grant_type: 'client_credentials',
            scope: 'webapi usermanagement email_send verification statement statistics payment',
            client_id: process.env.NEXT_PUBLIC_EPAY_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_EPAY_CLIENT_SECRET,
            invoiceID: invoiceId,
            secret_hash: "oryx2024",
            amount,
            currency: 'KZT',
            terminal: process.env.NEXT_PUBLIC_EPAY_CLIENT_TERMINAL,
        };

        // Запрос к внешнему API Halyk Bank для получения авторизации
        const res = await axios.postForm('https://epay-oauth.homebank.kz/oauth2/token', data);
        const { access_token, token_type } = res.data;

        const auth = { token: access_token, type: token_type }; // Данные авторизации
        const backUrl = process.env.NEXT_PUBLIC_URL + '/profile/parcels';

        // Конфигурация для платежного виджета
        const paymentObject = {
            invoiceId,
            invoiceIdAlt: invoiceId,
            backLink: backUrl,
            failureBackLink: backUrl,
            language: 'RUS',
            description: 'Оплата на сайте Oryx.kz',
            accountId: process.env.NEXT_PUBLIC_EPAY_CLIENT_ID,
            terminal: process.env.NEXT_PUBLIC_EPAY_CLIENT_TERMINAL,
            amount,
            name: 'Oryx.kz',
            currency: 'KZT',
            auth,
        };

        // Возвращаем Promise, чтобы дождаться завершения платёжного процесса
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://epay.homebank.kz/payform/payment-api.js';
            script.onload = () => {
                window.halyk.showPaymentWidget(paymentObject, (callbackObject) => {
                    if (callbackObject.success) {
                        resolve(true); // Платеж успешен
                    } else {
                        resolve(false); // Платеж не удался
                    }
                });
            };
            script.onerror = () => {
                console.error('Ошибка при загрузке платёжного скрипта');
                resolve(false);
            };
            document.body.appendChild(script);
        });
    } catch (error) {
        console.error('Ошибка при создании платежа:', error.response?.data || error.message);
        return false; // Не удалось создать платеж
    }
};

export { generateInvoiceId, handlePayment };
