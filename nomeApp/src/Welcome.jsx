const Welcome = (prop) => {
    return (
        // if no prop is passed to the welcome components simply nothing is shown
        <p>Welcome, {prop.name}!</p>
    )
}

export default Welcome