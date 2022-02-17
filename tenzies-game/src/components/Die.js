function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div
            onClick={props.holdDice}
            className="die"
            style={styles}
        >
            {props.value}
        </div>
    )
}

export default Die