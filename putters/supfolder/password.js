const passwords = [
    'RainbowDashieIsTheBestPony1Guess',
    '1234',
    'A12345b',
    'password2017',
    'MyLittlePonyFriendshipIsAWESOME',
]

policy('Atless one uppercase latter', () => {
    password(passwords, /[A-Z]/g);
});

policy('Atless one lowercase latter', () => {
    password(passwords, /[a-z]/g);
});

policy('Atless have 8 characters', () => {
    password(passwords, /.{8,}/g);
});

// It run raw JavaScript DUH :/

passwords[2] = 'Password2017';

policy('Rerun: Atless one uppercase latter', () => {
    password(passwords, /[A-Z]/g);
});