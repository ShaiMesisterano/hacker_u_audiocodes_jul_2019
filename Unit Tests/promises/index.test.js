const mock = require('./mock');

test('mock', () => {
    expect(mock()).toBe(42);
});

test('async resolve', () => {
    const value = 43;
    const asyncResolveMock = jest.fn().mockResolvedValue(value);
    expect(asyncResolveMock()).resolves.toBe(value);
});

test('async reject', () => {
    const error = 'async error';
    const asyncRejectMock = jest.fn().mockRejectedValue(error);
    expect(asyncRejectMock()).rejects.toBe(error);
})