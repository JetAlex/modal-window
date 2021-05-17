import * as React from "react";
import logo from './logo.svg';
import {Modal} from './components/modal'
import {IListItem, List} from './components/list'

const mockListData: IListItem[] = [
    {
        id: "123",
        title: "NEM",
        subTitle: "Newmont Corporation"
    },
    {
        id: "234",
        title: "SP500TR",
        subTitle: "S&P 500 Index Total Returns"
    },
    {
        id: "2341",
        title: "Lorem Ipsum Dolores Sit amet Lorem Ipsum Dolores Sit amet Lorem Ipsum Dolores Sit amet",
        subTitle: "Consectetur Adiscing amet in vino veritas Consectetur Adiscing amet in vino veritas Consectetur Adiscing amet in vino veritas"
    }
];


function App() {
    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => setModalVisible(!isModalVisible);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button
                    className="App-link"
                    onClick={toggleModal}
                >
                    Open Modal
                </button>
            </header>

            {isModalVisible && (
                <Modal
                    onClose={toggleModal}
                    modalTitle="Edit Comparison"
                    modalFooterButton={{
                        title: "Compare",
                        callback: () => alert("Compare"),
                    }}
                >
                    <List
                        data={mockListData}
                        inputPlaceholder="Add up to 6 symbols (e.g. AAPL)"
                        minItemsNumber={7}
                    />
                </Modal>
            )}
        </div>
    );
}

export default App;
