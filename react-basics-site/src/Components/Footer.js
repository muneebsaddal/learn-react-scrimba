function Footer(props) {
    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <small>© 2022 Controller development. All rights reserved.</small>
        </footer>
    )
}

export default Footer