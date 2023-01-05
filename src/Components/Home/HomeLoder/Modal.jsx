import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Modal } from "antd";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { useState } from "react";


const App = () => {

    const [show, setShow] = useState({ visible: false });

    const showModal = () => {
        setShow({
            visible: true
        });
    };

    const hideModal = () => {
        setShow({
            visible: false
        });
    };

    // const pause = () => {
    //     this.player.pause();
    // };

    return (
        <div className="App">
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                visible={this.state.visible}
                footer={null}
                onCancel={this.hideModal}
                // afterClose={this.pause}
                bodyStyle={{ padding: 0 }}
            >
                <Player
                    autoPlay
                    ref={ref => {
                        this.player = ref;
                    }}
                >
                    <source
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        type="video/mp4"
                    />
                </Player>
            </Modal>
        </div>
    )
}

export default App

