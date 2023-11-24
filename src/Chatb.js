import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import logo from "./components/Assets/logo.png"


const steps = [
    {
        id: '0',
        message: 'Hey Conscious!',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
        ],
        end: true
    }
];

const theme = {
    background: 'lavender',
    headerBgColor: '#6f73a6',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#687EFF',
    userFontColor: 'white',
};

// Set the botAvatar as a string representing the URL of the image
const config = {
    botAvatar: logo,
    floating: true,
};

function Ch() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="MindfulMate"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default Ch