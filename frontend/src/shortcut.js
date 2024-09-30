// frontend/public/js/shortcuts.js
document.addEventListener('keydown', (e) => {
    if (e.key === 'D') {
        // Trigger delete
        const threadId = getSelectedThreadId(); // Implement this function
        fetch(`/onebox/${threadId}`, { method: 'DELETE' });
    } else if (e.key === 'R') {
        // Open reply box
        document.getElementById('replyBox').style.display = 'block';
        document.getElementById('sendReply').style.display = 'block';
    }
});
