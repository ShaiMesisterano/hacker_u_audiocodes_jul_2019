jest.mock('./db');
const DB = require('./db');

const dbInstance = new DB();

const mockFunction = (username, password) => ({
    username: `${username} from mock`,
    pass: `${password} from mock`
});

const connectMock = jest.fn().mockImplementation( mockFunction );

dbInstance.connect.mockImplementation(connectMock);

const connection = dbInstance.connect('jimmy', '1234');
test('mock function', () => {
    expect(connection.username).toBe('jimmy from mock');
    expect(connection.pass).toBe('1234 from mock');
});

test('connect mock calls', () => {
    expect(connectMock.mock.calls[0][0]).toBe('jimmy');
    expect(connectMock.mock.calls[0][1]).toBe('1234');
})