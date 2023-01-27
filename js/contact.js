let telegramBotToken = '5498087260:AAEdzYHm0nyD9MMq3C07ChCKcqFsSvHvhOQ';
let chatId = '839655417';
let fullName = $('#name');
let email = $('#email');
let message = $('#message');
const danger = $('#danger-alert');
const success = $('#success-alert');
form.on('submit', () => {
    if (!validate()) {
        showErrorAlert();
        return false;
    }
    let notification = 'Ismi: ' + fullName.val().trim() + '\nEmail: ' + email.val().trim() + '\nIzoh: ' + message.val().trim();
    sendNotification(notification);
    return false;
});
const validate = () => {
    return !(fullName.val().trim().length === 0 ||
        email.val().trim().length === 0 ||
        message.val().trim().length === 0);
}
const sendNotification = (notification) => {
    let settings = {
        async: true,
        crossDomain: true,
        url: 'https://api.telegram.org/bot' + telegramBotToken + '/sendMessage',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        },
        data: JSON.stringify({
            chat_id: chatId,
            text: notification,
        }),
    };
    $.ajax(settings).done(function (response) {
        showSuccessAlert();
        fullName.val('');
        email.val('');
        message.val('');
    });
};
const showErrorAlert = () => {
    danger.removeClass('hide')
    setTimeout(() => {
        danger.addClass('hide')
    }, 4000)
};
const showSuccessAlert = () => {
    success.removeClass('hide')
    setTimeout(() => {
        success.addClass('hide')
    }, 4000)
};
