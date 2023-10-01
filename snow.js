function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}%`;
    document.querySelector('.snowflakes').appendChild(snowflake);
    snowflake.addEventListener('animationiteration', () => {
        snowflake.remove();
        createSnowflake();
    });
}


for (let i = 0; i < 50; i++) {
    createSnowflake();
}
